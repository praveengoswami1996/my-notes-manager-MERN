"use client";
import CtaButton from "@components/CtaButton";
import InputField from "@components/InputField";
import MainContainer from "@components/MainContainer";
import Link from "next/link";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { LoginFormValues } from "types";

const LoginPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({ mode: "all" });

  const onSubmit = (formData: {}) => {
    console.log(formData);
  } 

  return (
    <MainContainer title={"Login Here"}>
      <div className="flex flex-col gap-4">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <Controller
              name="email"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder={"Enter your email"}
                  label={"Email Address"}
                  onChange={onChange}
                  value={value}
                  error={errors.email?.message?.toString()}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter your password to login",
                }
              }}
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder={"Enter your password"}
                  label={"Password"}
                  onChange={onChange}
                  value={value}
                  error={errors.password?.message?.toString()}
                />
              )}
            />
          </div>
          <div>
            <CtaButton primary>Login</CtaButton>
          </div>
        </form>

        <div className="flex items-center gap-2 text-base">
          <span>Do not have an account yet?</span>
          <Link href={"/register"} className="text-primary font-medium">
            Register Here
          </Link>
        </div>
      </div>
    </MainContainer>
  );
};

export default LoginPage;

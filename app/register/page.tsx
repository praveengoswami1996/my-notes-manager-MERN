"use client";
import CtaButton from "@components/CtaButton";
import ImageInput from "@components/ImageInput";
import InputField from "@components/InputField";
import MainContainer from "@components/MainContainer";
import Link from "next/link";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (formData: {}) => {
    console.log(formData);
  };

  return (
    <MainContainer title={"Register Here"}>
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex gap-10">
            <div className="flex items-start justify-center">
              <ImageInput />
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                <Controller
                    name="name"
                    control={control}
                    rules={{
                    required: {
                        value: true,
                        message: "Name is required",
                    },
                    pattern: {
                        value: /^[A-Za-z\s.'-]+$/,
                        message: "Please enter a valid name",
                    },
                    }}
                    render={({ field: { onChange, value } }) => (
                    <InputField
                        placeholder={"Enter your name"}
                        label={"Name"}
                        onChange={onChange}
                        value={value}
                        error={errors.name?.message?.toString()}
                    />
                    )}
                />
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
                        message: "Please create a password",
                    },
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                    },
                    maxLength: {
                        value: 20,
                        message: "Password length cannot exceed 20 characters",
                    },
                    pattern: {
                        value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                        message:
                        "Password must include at least one lowercase letter, one uppercase letter, one digit, and one special character from @, $, !, %, *, ?, &,.",
                    },
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

                <Controller
                    name="confirmpassword"
                    control={control}
                    rules={{
                        required: {
                        value: watch("password"),
                        message: "Please confirm the password"
                        },
                        validate: (fieldValue) => {
                        return (
                            fieldValue === watch("password") || 'Password did not match'
                        ); 
                        }
                    }}
                    render={({ field: { onChange, value } }) => (
                    <InputField
                        placeholder={"Please re-enter your password"}
                        label={"Confirm Password"}
                        onChange={onChange}
                        value={value}
                        error={errors.confirmpassword?.message?.toString()}
                    />
                    )}
                />
                </div>
                <div>
                    <CtaButton primary>Register</CtaButton>
                </div>
                <div className="flex items-center gap-2 text-base">
                    <span>Already have an account?</span>
                    <Link href={"/login"} className="text-primary font-medium">
                        Login Here
                    </Link>
                </div>
            </div>
          </div>
          
        </form>
      </div>
    </MainContainer>
  );
};

export default RegistrationPage;

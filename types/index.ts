import { ChangeEventHandler } from "react";

export type LoginFormValues = {
    email: string
    password: string
}

export type CustomInputFieldProps = {
    placeholder?: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    error?: string
    label?: string
}

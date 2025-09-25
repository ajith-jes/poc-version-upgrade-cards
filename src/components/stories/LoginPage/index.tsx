import React from 'react'
import { FC, useMemo, useState } from "react"
import { Button } from "../Button"
import { InputField } from "../InputField"

type FormType = "login"

type AuthFormProps = {
    type: FormType
    data: AuthFormData
}

type AuthFormData = {
[AuthFormField.EMAIL]?: string
[AuthFormField.PASSWORD]?: string
}

enum AuthFormField  {
    EMAIL = "email",
    PASSWORD = "password"
}

export const AuthForm: FC<AuthFormProps> = (_props) => {
    const [authData, setAuthData] = useState<AuthFormData>({
        [AuthFormField.EMAIL]: "",
        [AuthFormField.PASSWORD]: ""
    });

    const updateField = (key: AuthFormField, value: any) => {
        setAuthData({...authData, [key]: value})
    }

    const emailInput = useMemo(() => {
        return <InputField name='password' 
        formField={false}
            block
            label="Email" 
            value={authData.email} 
            onChange={({ target }) => updateField(AuthFormField.EMAIL, target.value)}
        />
    }, [_props, authData])

    const passwordInput = useMemo(() => {
        return <InputField name='password'
 formField={false}
            block
            label="Password" 
            value={authData.password} 
            onChange={({ target }) => updateField(AuthFormField.PASSWORD, target.value)}
        />
    }, [_props, authData])


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }} className="bg-buttonText p-8 w-[450px]">
            <h1 className="ml-0 pb-6 display-4">Login to your Account</h1> <br />
            {emailInput} <br />
            {passwordInput} <br />
            <div className="text-right">
                <span className="link">Forgot Password?</span>
            </div>
            <div className="flex justify-center pt-4">
                <Button>Login</Button>
            </div>
        </form>
    )
}


export const LoginPage = () => {
    return (
        <div className="bg-[#ECECEC] h-screen w-screen flex items-center justify-center">
            <AuthForm type="login" data={{email: "user@mail.com", password: "pwd123" }} />
        </div>
    )
}


import React, { FormHTMLAttributes, useCallback, useEffect, useRef } from 'react';
import { FC, useMemo, useState } from "react"
import { Form, Formik, FormikProps } from 'formik';
import { object, string } from 'yup'
import { Button } from '../Button';
import { Icons } from '../Icons';
import { InputField } from '../InputField';
import { AuthFormProps, AuthFormField, InputPropsType, AuthFormData } from './index.interface';



export const AuthForm: FC<AuthFormProps> = (_props) => {
    const initialValues = { ..._props.data }
    const { navigate } = _props;

    const Input = (label: string, name: AuthFormField, type: React.HTMLInputTypeAttribute, e: InputPropsType, condition: boolean) => {
        return condition ? <InputField 
            block={true}
            label={label}
            name={name}
            type={type}
            onBlur={e.handleBlur}
            onChange={e.handleChange}
            value={e.values[name]}
            error={e.errors[name] ? e.touched[name] ? e.errors[name] : "" : ""}
        /> : ""
    }

    const title = useMemo(() => {
        switch (_props.type) {
            case "login":
                return "Login to your Account"
            case "forgot":
                return "Having trouble logging in?"
            case "update":
                return "Reset Password"
            default:
                return "Login to your Account"
        }
    }, [_props.type])
    
    const buttonText = useMemo(() => {
        switch (_props.type) {
            case "login":
                return "Login"
            case "forgot":
                return "Send Link"
            case "update":
                return "Send Password"
            default:
                return "Login"
        }
    }, [_props.type])

    const description = useMemo(() => {
        switch (_props.type) {
            case "forgot":
                return "You will receive a recovery link to your Email"
            case "update":
                return "Please make sure both the passwords match"
            default:
                return ""
        }
    }, [_props.type])

    useEffect(() => {
        let content = `
     at least 1 uppercase letter (A-Z)
     at least 1 lowercase letter (a-z)
     at least 1 number (0-9)
     at least 1 special character (ex: @#$%&* etc)`
    }, [])

    const checkPoint = useMemo(() => [
        {label: 'at least 1 uppercase letter (A-Z)', check: (v: string) => /[A-Z]/g.test(v),},
        {label: 'at least 1 lowercase letter (a-z)', check: (v: string) => /[a-z]/g.test(v),},
        {label: 'at least 1 number (0-9)', check: (v: string) => /[0-9]/g.test(v),},
        {label: 'at least 1 special character (ex: @#$%&* etc)', check: (v: string) => /[$&+,:;=?@#|'<>.^*()%!-]/g.test(v),},
    ], [])

    const computedCheckPoint = () => {}

    const confirmPasswordDescription = useCallback((val: string) => {

        if (_props.type == "update") {
            return (
                <div className='pt-5 password-validation-list'>
                    <h3>Password must be a minimum of 8 characters with</h3>
                    <ul>
                        {
                            checkPoint.map((e, i) => (
                                <li className='flex' key={i}> 
                                    {!e.check(val) ? <span className='span1'><Icons color='#ff0000' size={24} name={"close"}></Icons> </span> :
                                    <span className='span2'><Icons  color='#00ff00' size={24} name="account"></Icons> </span> }
                                    <span>{e.label}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
        return ""
    }, [_props.type, checkPoint])

    const _validation = (val: AuthFormData) => {
            const errors: any = {};
            if (_props.type == "update") {
                errors[AuthFormField.CONFIRM_PASSWORD] = val.password != val.confirm_password ? "Password dose'nt match!" : ""
            }
            return errors
    }

    const form = useRef<HTMLFormElement>(null)

    return (
        <div className={'auth-form'}>
            <Formik 
                initialValues={initialValues} 
                onSubmit={(val) => {

                    _props.onSubmit(val)
                }} validate={_validation} 
                validationSchema={() => {
                    if (_props.type == "login") {
                        return object({
                            [AuthFormField.USERNAME]: string().required("Email is required").email("Invalid email address"),
                            [AuthFormField.PASSWORD]: string().required("Password is required")
                        })
                    }
                    else if (_props.type == "forgot") {
                        return object({
                            [AuthFormField.USERNAME]: string().required("Email is required").email("Invalid email address")
                        })
                    } else {
                        return object({
                            [AuthFormField.PASSWORD]: string().required("Password is required"),
                            [AuthFormField.CONFIRM_PASSWORD]: string().required("Confirm Password is required")
                        })
                    }
                }}
            >
                {(e) => (
                    <form onSubmit={(val) => {
                        // el.preventDefault()
                        e.handleSubmit(val)
                    }} >
                        <h1 className="auth-form__title">
                            {title}
                        </h1>
                        <div className='auth-form__description'>
                            {!!description ? <p >{description}</p> : ""}
                        </div>
                        {Input("Email", AuthFormField.USERNAME, "username", e, ["login", "forgot"].includes(_props.type))}
                        {Input("Password", AuthFormField.PASSWORD, "password", e, ["login", "update"].includes(_props.type))}
                        {Input("Confirm Password", AuthFormField.CONFIRM_PASSWORD, "password", e, ["update"].includes(_props.type))}

                        {_props.type == "login" ? <div className="auth-form__forgot-password">
                            <span onClick={(e) => navigate("/auth/forgot-password")} 
                            className="link cursor-pointer">Forgot Password?</span>
                        </div> : ""}
                    
                        {
                        ["update"].includes(_props.type) ?
                        <div className='auth-form__update-password'>
                            <span className='auth-form__update-password__cancel' 
                            onClick={(e) => navigate("/auth/login")}>cancel</span>
                            <Button  onClick={() => {
                                if (!checkPoint.map((el) => el.check(`${e.values.password}`)).includes(false)) {
                                    _props.onSubmit({ password: e.values.password });
                                }
                            }} type='submit' >{buttonText}</Button>
                        </div> 
                        : <div className="auth-form__button_center_wrapper">
                            <Button >{buttonText}</Button>
                        </div>
                        }
                        {confirmPasswordDescription(`${e.values.password}`)}
                        {_props.type == "forgot" ? <div className='auth-form__text-center'>
                            <br />
                            <hr />
                            <br />
                            <div className="auth-form__login_link">
                                <span onClick={() => navigate("/auth/login")} className="link auth-form__cursor_pointer">Return to Login</span>
                            </div>
                        </div> : "" }
                    </form>
                )}
            </Formik>
        </div>
    )
}
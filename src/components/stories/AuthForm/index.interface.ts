import { FormikProps } from 'formik';

export type FormType = "login" | "forgot" | "update"

export type AuthFormProps = {
    type: FormType
    data: AuthFormData
    onSubmit:(value:any)=> void
    navigate: (pathName: string) => void
}


export type AuthFormData = {
[AuthFormField.USERNAME]?: string
[AuthFormField.PASSWORD]?: string
[AuthFormField.CONFIRM_PASSWORD]?: string
}

export type InputPropsType = FormikProps<AuthFormData>

export enum AuthFormField  {
    USERNAME = "username",
    PASSWORD = "password",
    CONFIRM_PASSWORD = "confirm_password"
}


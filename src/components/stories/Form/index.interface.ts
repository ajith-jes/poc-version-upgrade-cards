import { FormikErrors, FormikHelpers, FormikValues } from "formik"


export type FormProps = {
    children?: any
    initialValues: any 
    onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>)  => void | Promise<any>
    validate?: ((values: any) => void | object | Promise<FormikErrors<any>>) & true
    className?: string
}

import React, { FC } from 'react';

import { FormProps } from './index.interface';
import { Formik, Form as FormWrapper } from 'formik';



/**
 * Primary UI component for user interaction
 */
export const Form: FC<FormProps> = (_props) => {
  return (
    <Formik
      initialValues={_props.initialValues}
      validate={_props.validate}
      onSubmit={_props.onSubmit}
    >
      {
      () => <FormWrapper>
        {_props.children}
      </FormWrapper>}
    </Formik>
  );
};
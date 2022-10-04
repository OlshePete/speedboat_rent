import { useFormik } from 'formik';
import React from 'react'

function SigninForm() {
      const formik = useFormik({
     initialValues: {
       login: '',
       password: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
  return (
    <div>SigninForm</div>
  )
}

export default SigninForm
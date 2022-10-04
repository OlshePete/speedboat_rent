import { Button } from '@mui/material';
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
    <form onSubmit={formik.handleSubmit}>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
 
       <Button variant='text' type="submit">Submit</Button>
     </form>
  )
}

export default SigninForm
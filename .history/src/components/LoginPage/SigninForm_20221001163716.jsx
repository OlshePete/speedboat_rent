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
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
 
       <button type="submit">Submit</button>
     </form>
  )
}

export default SigninForm
import { Button } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("Enter your login")
    .required("Login is required"),
  password: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required"),
});
function SigninForm() {
  const formik = useFormik({
    initialValues: {
      login: "admin",
      password: "admin",
    },
    onSubmit: (values) => {
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

      <Button variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default SigninForm;

import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { setToken } from "../../reducers/appReducer";
const validationSchema = yup.object({
  email: yup.string("Enter your login").required("Login is required"),
  password: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required"),
});
function SigninForm() {
const dispatch = useDispatch();
const [authInfo, setAuthInfo] = useState(null)
  const formik = useFormik({
    initialValues: {
      login: "admin",
      password: "admin",
    },
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2))
        // authRequest(JSON.stringify(values, null, 2))
       const getToken = authRequest(values)
        // console.log("##",getToken);
         await dispatch(setToken(getToken)) 
        
    },
  });
  const authRequest = async (values) => {

    const response = await fetch(
      // `.api/statistic/incidence?${data}`
      `/auth/local/signin`,
      {
        method: "POST",
        headers: {
        //   Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const res = await response.json();
    
    console.log(typeof res)
    return res;
  };
  return (
    <Box
      sx={{
        "& form": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        },
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth={false}
          required
          id="login"
          name="login"
          label="login"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
        />
        <TextField
          fullWidth={false}
          required
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button onClick={() => {}} type="submit" variant="outlined">
          Login
        </Button>
      </form>
    </Box>
  );
}

export default SigninForm;

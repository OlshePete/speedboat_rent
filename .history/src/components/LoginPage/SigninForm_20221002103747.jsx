import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authSignIn } from "../../reducers/appReducer";

const validationSchema = yup.object({
  login: yup.string("Введите имя пользователя").required("Обязательное поле"),
  password: yup
    .string("Введите пароль")
    .min(4, "Пароль должен быть больше 4 символов")
    .required("Обязательное поле"),
});

function SigninForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(authSignIn(values));
    },
  });

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
        {JSON.stringify(formik)}
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

import { Box, Button, Container, TextField } from "@mui/material";
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
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(authSignIn(values));
    },
  });
  console.log(formik.errors);
  return (
    <Container
      maxWidth="sm"
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
          label="Введите данные для авторизации"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          size="small"
        />
        <TextField
          fullWidth={false}
          required
          id="password"
          name="password"
          label="Введите пароль"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          size="small"
        />
        <Button
          sx={{
            height: 48,
          }}
          fullWidth
          onClick={() => {}}
          type="submit"
          variant="outlined"
        >
          Login
        </Button>
      </form>
    </Container>
  );
}

export default SigninForm;

import { Box } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from 'yup'

const validationSchema = yup.object({
  route: yup.string("Выберите маршрут").min(2).required("Поле обязательное"),
  date: yup.string("Выберите дату").required("Поле обязательное"),
  spots: yup.number("Выберите количество мест").required("Поле обязательное"),
});
function FormEvent() { 
    const formik = useFormik({
    initialValues: {
      route: "",
      date: "",
      spots: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
            rkbtyn
        </Box>
      </form>
    </div>
  );
}

export default FormEvent;

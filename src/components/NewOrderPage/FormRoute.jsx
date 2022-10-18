import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentOrder } from "../../reducers/appReducer";
import { ROUTE_OPTIONS, TIMESPOTS_OPTIONS } from "../../data/routedata";
import ButtonGroupSpot from "./ButtonGroupSpot";
import MainButton from "../Buttons/MainButton";
import CustomDatePicker from "./CustomDatePicker";
import CustomSelect from "./CustomSelect";

const validationSchema = yup.object({
  route: yup.string("Выберите маршрут").min(2).required("Маршрут не выбран"),
  date: yup.string("Выберите дату").required("Дата не выбрана"),
  spots: yup
    .number("Выберите количество мест")
    .moreThan(0, "Количество мест не выбрано"),
  timespot: yup
    .number("Выберите время отправления")
    .moreThan(0, "Время отправления не выбрано"),
});

function FormRoute({ nextStep = () => {} }) {
  const { currentOrder } = useSelector((state) => state.speedboat);
  const dispatch = useDispatch();
  let initialValues = {
    route: "",
    date: "",
    spots: 0,
    timespot: 0,
  };
  if (!!currentOrder.route) initialValues = { ...currentOrder };
  const formik = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setCurrentOrder({ ...values }));
      console.log(values);
      nextStep();
    },
  });
  const handleChangeSpot = (e) => {
    formik.setFieldValue("spots", +e.target.id);
  };
  const handleClear = () => {
    dispatch(
      setCurrentOrder({
        route: "",
        date: "",
        spots: 0,
        timespot: 0,
      })
    );
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
        }}
      >
        <CustomSelect
          placeholder={"Выберите маршрут:"}
          onChange={(value) => formik.setFieldValue("route", value.value)}
          value={formik.values.route}
          options={ROUTE_OPTIONS}
        />
        <CustomDatePicker value={formik.values.date} formik={formik} />
        <CustomSelect
          placeholder={"Время отправления"}
          onChange={(value) => formik.setFieldValue("timespot", value.value)}
          value={formik.values.timespot}
          options={TIMESPOTS_OPTIONS}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography component={"span"} variant="subtitle2">
            Количество мест: {String(formik.values.spots)}
          </Typography>
          <ButtonGroupSpot
            handleClick={handleChangeSpot}
            value={formik.values.spots}
          />
        </Box>
        <Box
        sx={{
          display:"flex",
          gap:2,
          height:'20px'
        }}
        >
        <MainButton title="Готово" type="submit" />
        <MainButton
          title="Очистить"
          type="reset"
          bg="#E83100"
          hoverbg="#FF6933"
          // onClick={(e) => {
          //   formik.resetForm();
          //   handleClear();
          // }}
        />

        </Box>
        {Object.keys(formik.errors).map((el, i) => {
          return (
            <div className="error MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-k4qjio-MuiFormHelperText-root">
              {formik.errors[el]}
            </div>
          );
        }) || <></>}
      </Box>
    </form>
  );
}

export default FormRoute;

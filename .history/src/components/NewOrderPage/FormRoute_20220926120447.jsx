import {
  Box,
  Button,
  ButtonGroup,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentOrder } from "../../reducers/appReducer";
import { ROUTE_OPTIONS, TIMESPOTS_OPTIONS } from "../../data/routedata";
import ButtonGroupSpot from "./ButtonGroupSpot";

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

function FormRoute({nextStep=()=>{}}) {
  const {currentOrder} = useSelector((state) => state.speedboat)
  const dispatch = useDispatch();
  let initialValues = {
      route: "",
      date: "",
      spots: 0,
      timespot: 0, 
  }
  if (!!currentOrder.route) initialValues={...currentOrder}
  const formik = useFormik({
    initialValues: {
      ...initialValues
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setCurrentOrder({...values}))
      console.log(values);
      nextStep()
    },
  });
  const handleChangeSpot = (e) => {
    formik.setFieldValue("spots", +e.target.id)
  }
  const handleClear = () => {
    dispatch(setCurrentOrder({
      route: "",
      date: "",
      spots: 0,
      timespot: 0, 
  }))
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            minWidth:'100%',
            maxWidth:'100%',
          }}
        >
          <CustomSelect
            placeholder={"Выберите маршрут"}
            onChange={(value) => formik.setFieldValue("route", value.value)}
            value={formik.values.route}
            options={ROUTE_OPTIONS}
          />
         
          <CustomDatePicker value={formik.values.date} formik={formik} />
            <CustomSelect
              placeholder={"Время отправления"}
              onChange={(value) =>
                formik.setFieldValue("timespot", value.value)
              }
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
              количество мест - {String(formik.values.spots)}
            </Typography>
            <ButtonGroupSpot
              handleClick={handleChangeSpot}
              value={formik.values.spots}
            />

          </Box>
          {/* {JSON.stringify(formik.values)} */}
          <Button color="primary" variant="contained" type="submit">
            Готово
          </Button>
          <Button color="error" variant="text" type="reset" onClick={(e)=>{formik.resetForm();handleClear() }}>
            Очистить
          </Button>
          {Object.keys(formik.errors).map((el, i) => {
            return (
              <div className="error MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-k4qjio-MuiFormHelperText-root">
                {formik.errors[el]}
              </div>
            );
          }) || <></>}
        </Box>
      </form>
    </div>
  );
}

export default FormRoute;

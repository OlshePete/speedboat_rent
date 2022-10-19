import { Box, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { MuiTelInput } from "mui-tel-input";
import React, { useState } from "react";
import MainButton from "../Buttons/MainButton";

function NewAgentWrapper() {
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");

  // const handleChangePhone = (newValue, info) => {
  //   setInfo(info);
  //   if (info.nationalNumber.length <= 10) {
  //     setPhone(newValue);
  //   } else {
  //     setPhone(String(newValue).substring(0, newValue.length - 1));
  //   }
  // };
  const formik = useFormik({
    initialValues: {
      agent_name: "",
      agent_phone: "",
      agent_ratio: 10,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(phone);
  console.log(info);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="block_title">Добавление нового агента</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ my: 1 }}
          size="small"
          fullWidth
          id="email"
          name="agent_name"
          label="Имя и фамилия агента"
          value={formik.values.agent_name}
          onChange={formik.handleChange}
          error={formik.touched.agent_name && Boolean(formik.errors.agent_name)}
          helperText={formik.touched.agent_name && formik.errors.agent_name}
        />
        {/* <Field sx={{mt:1,width:'100%'}} label="Имя и фамилия агента" name="agent_name" component={TextField} /> */}
        {/* <Field sx={{mt:1,mb:1,width:'100%', bgcolor:'white'}} label="Номер телефона агента" name="agent_phone" component={TextField} /> */}
        {/* <Field sx={{mt:1,mb:1,width:'100%', bgcolor:'white'}} label="Номер телефона агента" name="agent_phone" component={TextField} /> */}
        <MuiTelInput
          sx={{ my: 1 }}
          fullWidth
          size="small"
          defaultCountry="RU"
          name="agent_phone"
          // onlyCountries={['RU']}
          label="Введите номер мобильного телефона"
          value={phone}
          onChange={(newValue, info) => {
            setInfo(info);
            if (info.nationalNumber.length <= 10) {
              setPhone(newValue);
              formik.handleChange("agent_phone")(
                String(newValue).substring(0, newValue.length - 1)
              );
            } else {
              setPhone(String(newValue).substring(0, newValue.length - 1));
              formik.handleChange("agent_phone")(
                String(newValue).substring(0, newValue.length - 1)
              );
            }
          }}
        />
        <MainButton
          title="добавить агента"
          //   onClick={handleBack}
          hoverbg="#FF6933"
          type="submit"
        />
      </form>
    </Box>
  );
}

export default NewAgentWrapper;

import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import React from "react";

function CustomDatePicker({ value, formik }) {
  const today = new Date();
  const todayString = today.toLocaleDateString("sv-SE");
  today.setDate(today.getDate() + 1);
  const tommorowString = today.toLocaleDateString("sv-SE");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography component={"span"} variant="subtitle2">
        Дата поездки:
      </Typography>

      <ButtonGroup
        size="small"
        aria-label="fast set Date buttongroup"
        sx={{ height: 40 }}
      >
        <Button
          key="today-button"
          onClick={() => formik.setFieldValue("date", todayString)}
        >
          Сегодня
        </Button>
        <Button
          key="tomorrow-button"
          onClick={() => {
            formik.setFieldValue("date", tommorowString);
          }}
        >
          Завтра
        </Button>
      </ButtonGroup>
      <TextField
        sx={{
          backgroundColor: "white",
        }}
        defaultValue={formik.values.date}
        size="small"
        type="date"
        fullWidth
        id="date"
        name="date"
        value={formik.values.date}
        onChange={formik.handleChange}
        error={formik.touched.date && Boolean(formik.errors.date)}
        helperText={formik.touched.date && formik.errors.date}
      />
    </Box>
  );
}

export default CustomDatePicker;

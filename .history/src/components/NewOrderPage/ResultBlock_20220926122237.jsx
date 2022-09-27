import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { ROUTE_OPTIONS, TIMESPOTS_OPTIONS } from "../../data/routedata";
import { QRCodeSVG } from "qrcode.react";

function ResultBlock({ currentOrder, currentCustomer, handleReset }) {
  return (
    <Paper square elevation={0} sx={{ p: 3 }}>
      <Typography variant="h6" color="red">
        Заказ № 001-2022
      </Typography>
      <Typography variant="subtitle2" color="green">
        успешно создан
      </Typography>
      <Divider color="green" />
      <Typography variant="body1">
        <b>Дата:</b> {currentOrder.date}
      </Typography>
      <Typography variant="body1">
        <b>Время:</b>{" "}
        {
          TIMESPOTS_OPTIONS.find(
            (timespot) => timespot.value === currentOrder.timespot
          ).label
        }
      </Typography>
      <Typography variant="body1">
        <b>Маршрут:</b>{" "}
        {
          ROUTE_OPTIONS.find((route) => route.value === currentOrder.route)
            .label
        }
      </Typography>
      <Typography variant="body1" color="red">
        <b>Катер:</b> не назначен
      </Typography>
      <Typography variant="body1">
        <b>Кол-во:</b> {currentOrder.spots} человека
      </Typography>
      <Typography variant="body1">
        <b>Клиент:</b> <a href="">{currentCustomer.name},{" "}
        {currentCustomer.phone}</a>
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          pt: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QRCodeSVG value="https://reactjs.org/" />
      </Box>
      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
        Reset
      </Button>
    </Paper>
  );
}

export default ResultBlock;

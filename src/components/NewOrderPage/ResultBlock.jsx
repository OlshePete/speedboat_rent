import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { ROUTE_OPTIONS, TIMESPOTS_OPTIONS } from "../../data/routedata";
import { QRCodeSVG } from "qrcode.react";
import MainButton from "../Buttons/MainButton";

function ResultBlock({ currentOrder, currentCustomer, handleReset }) {
  return (
    <Paper
      square
      elevation={0}
      sx={{
        margin: "0 auto",
        p: 3,
        borderRadius: "8px",
        maxWidth: "240px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box>
          <Typography variant="body1" color="red">
            Заказ №: <br /> 001-2022
          </Typography>
          <Typography variant="subtitle2" color="green">
            Успешно создан
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="warning"
          onClick={handleReset}
          sx={{
            fontWeight: 600,
            height: "100%",
          }}
        >
          Закрыть
        </Button>
      </Box>
      <Divider
        color="green"
        sx={{
          my: 1,
        }}
      />
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
        <b>Клиент:</b> <br />
        <a href="">{currentCustomer.name},</a>
      </Typography>
      <Typography variant="body1">
        <b>Номер клиента:</b> <br />
        <a href="">{currentCustomer.phone}</a>{" "}
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
    </Paper>
  );
}

export default ResultBlock;

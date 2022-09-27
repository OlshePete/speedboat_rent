import { Button, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { ROUTE_OPTIONS, TIMESPOTS_OPTIONS } from '../../data/routedata'

function ResultBlock({currentOrder, currentCustomer, handleReset}) {
  return (
    <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography variant="h6" color="red">
            Заказ № 001-2022
          </Typography>
          <Typography variant="subtitle2" color="green">успешно создан</Typography>
          <Divider  color="green"/>
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
            <b>Катер:</b> Шторм
          </Typography>
          <Typography variant="body1">
            <b>Кол-во:</b> {currentOrder.spots} человека
          </Typography>
          <Typography variant="body1">
            <b>Клиент:</b> {currentCustomer.name},{" "}
            <a href="">{currentCustomer.phone}</a>
          </Typography>

          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
  )
}

export default ResultBlock
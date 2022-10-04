import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Card, Grid, Typography } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
function createData(name, sum, route) {
  return { name, sum, route };
}

const rows = [
  createData("Андрей", 1000, "Валаам"),
  createData("Антон", 1500, "Шхеры"),
  createData("Иван", 2500, "Валаам + Шхеры"),
];

const data = [
  {
    route: "Шхеры",
    order_date: "2022-10-04",
    event_date: "2022-12-04",
    spots: 2,
    timespot: "17:00",
    customer_phone: "+79216365123",
    is_paid: false,
    is_exec: false,
  },
  {
    route: "Валаам",
    order_date: "2022-10-04",
    event_date: "2022-12-04",
    spots: 2,
    timespot: "17:00",
    customer_phone: "+79216365123",
    is_paid: false,
    is_exec: false,
  },
  {
    route: "Валаам + Шхеры",
    order_date: "2022-10-04",
    event_date: "2022-12-04",
    spots: 2,
    timespot: "17:00",
    customer_phone: "+79216365123",
    is_paid: false,
    is_exec: false,
  },
  {
    route: "Валаам + Шхеры",
    order_date: "2022-10-04",
    event_date: "2022-12-04",
    spots: 2,
    timespot: "17:00",
    customer_phone: "+79216365123",
    is_paid: true,
    is_exec: false,
  },
];
export default function MoneyTable({ index = 3 }) {
  const dataar = new Date(data[0].order_date)
    const dateOptions = {
        day:'numeric',
        month:'long',
        year:'numeric'
    };
    const DateNow = new Intl.DateTimeFormat('ru', dateOptions)

  return (
    <Box
      sx={{
        // width:'100%',
        p: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        maxHeight: "250px",
        overflow: "auto",
      }}
    >
      <Typography variant="caption" align="right">
        {" "}
        Список заказов
      </Typography>
      {data.map((el, index) => {
        return (
          <Card
            sx={{
              minHeight: "80px",
              maxHeight: "80px",
              display:'flex',
              minWidth:'100%',
              justifyContent:'space-between'
            }}
          >
            <Box sx={{bgcolor: "inherit", display: "flex", width:'100%', alignItems: "center", justifyContent:'space-between',p:1 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minHeight: "100%",
                  justifyContent: "center",
                }}
              >
                <Typography variant="phone"> {el.customer_phone}</Typography>
                <Typography variant="date"> {DateNow.format(dataar)}</Typography>
              </Box>
              <Box xs={{ 
                  flexGrow:1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minHeight: "100%",
                  justifyContent: "center",
                }}
                  >
                <Typography variant="route"> {el.route}</Typography>
                <Typography variant="timespot"> {el.timespot}</Typography>
                  </Box>
              <Box xs={{ 
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minHeight: "100%",
                  justifyContent: "center",}}>
                <PaidIcon color={el.is_paid?"success":"error"}/>
              </Box>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя</TableCell>
            <TableCell align="right">Сумма</TableCell>
            <TableCell align="right">Маршрут</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.sum}</TableCell>
              <TableCell align="right">{row.route}</TableCell>
            </TableRow>
          ))}
          <Typography variant="h5" ml={2}>
            Всего: 4500
          </Typography>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
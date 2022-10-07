import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Card, Grid, Tooltip, Typography } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

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
    spots: 3,
    timespot: "17:00",
    customer_phone: "+79216365123",
    customer_name: "Иван",
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
    customer_name: "Мария",
    is_paid: false,
    is_exec: false,
  },
  {
    route: "Валаам + Шхеры",
    order_date: "2022-10-04",
    event_date: "2022-12-04",
    spots: 1,
    timespot: "17:00",
    customer_phone: "+79216365123",
    customer_name: "Антон",
    is_paid: false,
    is_exec: false,
  },
  {
    route: "Валаам + Шхеры",
    order_date: "2022-01-04",
    event_date: "2022-02-04",
    spots: 5,
    timespot: "17:00",
    customer_phone: "+79216365123",
    customer_name: "Сергей",
    is_paid: true,
    is_exec: true,
  },
  {
    route: "Валаам + Шхеры",
    order_date: "2022-01-04",
    event_date: "2022-02-04",
    spots: 5,
    timespot: "17:00",
    customer_phone: "+79216365123",
    customer_name: "Сергей",
    is_paid: true,
    is_exec: true,
  },
  {
    route: "Валаам + Шхеры",
    order_date: "2022-01-04",
    event_date: "2022-02-04",
    spots: 5,
    timespot: "17:00",
    customer_phone: "+79216365123",
    customer_name: "Сергей",
    is_paid: true,
    is_exec: true,
  },
];
export default function MoneyTable({ index = 3 }) {
  const dataar = new Date(data[0].order_date);
  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const DateNow = new Intl.DateTimeFormat("ru", dateOptions);

  return (
    <Box
      sx={{
        overflow: "scroll",
        boxSizing: "content-box",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          minHeight: "150px",
          maxHeight: "50vh",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          alignItems: "center",
        }}
      >
        {data.map((el, index) => {
          return (
            <Card
              key={"customer_card" + index}
              sx={{
                position: "relative",
                minHeight: "80px",
                width: "95%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "justify",
                p: 1,
              }}
            >
              <Box
                sx={{
                  bgcolor: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  width: "100%",
                  // alignItems: "center",
                  // justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="route">{el.route}</Typography>
                  <Typography variant="timespot">
                    {DateNow.format(dataar)} - {el.timespot}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="customer_name">
                      {el.customer_name}
                    </Typography>
                    <Typography variant="customer_phone">
                      {el.customer_phone}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="spots">
                      кол-во билетов - {el.spots}{" "}
                    </Typography>
                    <Typography
                      variant="is_paid"
                      sx={{
                        color: !el.is_paid ? "#dbba2d" : "#99ce65",
                      }}
                    >
                      {el.is_paid ? "Оплачен" : "Ожидает оплаты"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
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

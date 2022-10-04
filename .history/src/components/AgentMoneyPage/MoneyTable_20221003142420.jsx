import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Card, Typography } from "@mui/material";

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
    "route":"Шхеры",
    "order_date":"2022-10-04",
    "event_date":"2022-12-04",
    "spots":2,
    "timespot":"17:00",
    "customer_phone":"+79216365123",
    "is_paid":false,
    "is_exec":false,
  },
  {
    "route":"Валаам",
    "order_date":"2022-10-04",
    "event_date":"2022-12-04",
    "spots":2,
    "timespot":"17:00",
    "customer_phone":"+79216365123",
    "is_paid":false,
    "is_exec":false,
  },
  {
    "route":"Валаам + Шхеры",
    "order_date":"2022-10-04",
    "event_date":"2022-12-04",
    "spots":2,
    "timespot":"17:00",
    "customer_phone":"+79216365123",
    "is_paid":false,
    "is_exec":false,
  }
]
export default function MoneyTable({index=3}) {
  return(
    <Box
    sx={{
      bgcolor:'red',
      // width:'100%',
      p:1
    }}
    >
      {
        data.map((el,index)=>{
          return(
            <Card>
             <Typography> {el.customer_phone}</Typography>
             <Typography> {el.order_date}</Typography>
             <Typography> {el.route}</Typography>
             <Typography> {el.route}</Typography>
            </Card>
          )
        })
      }
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

import { Box, Container, Paper, Typography } from "@mui/material";
import { withTheme } from "@mui/styles";
import React from "react";
import MoneyTable from "./MoneyTable";

function AgentMoney({ theme }) {
  return (
    <Paper
      sx={{
        borderRadius: "8px",
        flexGrow: 1,
        p:1,
      }}
    >
      {/* <Box
        sx={{
        // border: `1px solid ${theme.palette.primary.main}`,
          width: "100%",
          height: "80px",
          border:'1px solid red',
          borderRadius: "8px",
        }}
      > */}
      <Typography variant="h5" align="right" sx={{minWidth:'100%'}}>
        Личный кабинет
      </Typography>
      <Box
        sx={{
        // border: `1px solid ${theme.palette.primary.main}`,
          width: "100%",
          height: "80px",
          border:'1px solid red',
          borderRadius: "8px",
        }}
      >
        <Typography variant="subtitle1" >
        Всего заказов: 254
      </Typography>
        <Typography variant="subtitle1" >
        Заработано
      </Typography>
      </Box>
      <Typography variant="body2" >
        Мои заказы
      </Typography>
      <Typography variant="body2" >
        Мои заказы
      </Typography>
      {/* </Box> */}
      {/* <MoneyTable /> */}
    </Paper>
  );
}

export default withTheme(AgentMoney);

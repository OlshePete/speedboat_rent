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
      <Typography variant="h5" align="rigth" sx={{minWidth:'100%'}}>
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
        <Typography variant="caption" >
        Заказы
      </Typography>
        <Typography variant="caption" >
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

import { Box, Container, Paper, Typography } from "@mui/material";
import { withTheme } from "@mui/styles";
import React from "react";
import MoneyTable from "./MoneyTable";

function AgentMoney({ theme }) {
  console.log(theme.palette.primary.main);
  return (
    // <Container maxWidth="fluid">
    <Paper
      sx={{
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "8px",
        flexGrow: 1,
        mt: 5,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          height: "80px",
          // border:'1px solid red',
          borderRadius: "8px",
        }}
      >
      <Typography variant="h5" my={2}>
        Доход
      </Typography>
      </Paper>
      {/* <MoneyTable /> */}
    </Paper>
    // </Container>
  );
}

export default withTheme(AgentMoney);

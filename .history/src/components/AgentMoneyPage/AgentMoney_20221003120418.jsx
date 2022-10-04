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
        mt: 5,
      }}
    >
      <Box
        elevation={0}
        sx={{
        // border: `1px solid ${theme.palette.primary.main}`,
          width: "100%",
          height: "80px",
          // border:'1px solid red',
          borderRadius: "8px",
        }}
      >
      <Typography variant="h5" my={2}>
        Доход
      </Typography>
      </Box>
      {/* <MoneyTable /> */}
    </Paper>
  );
}

export default withTheme(AgentMoney);

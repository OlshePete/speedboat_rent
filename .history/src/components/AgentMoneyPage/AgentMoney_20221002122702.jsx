import { Box, Container, Typography } from "@mui/material";
import React from "react";
import MoneyTable from "./MoneyTable";

function AgentMoney() {
  return (
    <Container maxWidth="fluid">
      <Box
      sx={{
        border:"1px solid red",
        borderRadius:'8px'
      }}
      >
        <Typography variant="h3" my={2}>
          Доход
        </Typography>
        {/* <MoneyTable /> */}
      </Box>
    </Container>
  );
}

export default AgentMoney;

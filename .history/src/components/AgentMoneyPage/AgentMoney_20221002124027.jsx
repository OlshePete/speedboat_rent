import { Box, Container, Typography } from "@mui/material";
import { withTheme } from "@mui/styles";
import React from "react";
import MoneyTable from "./MoneyTable";

function AgentMoney({theme}) {
  console.log(theme.palette.primary);
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

export default withTheme(AgentMoney);

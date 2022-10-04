import { Box, Container, Typography } from "@mui/material";
import { withTheme } from "@mui/styles";
import React from "react";
import MoneyTable from "./MoneyTable";

function AgentMoney({theme}) {
  console.log(theme.palette.primary.main);
  return (
    // <Container maxWidth="fluid">
      <Box
      sx={{
        border:`2px solid ${theme.palette.primary.main}`,
        borderRadius:'8px',
        flexGrow:1,
        p:1
      }}
      >
        <Typography variant="h3" my={2}>
          Доход
        </Typography>
        <MoneyTable />
      </Box>
    // </Container>
  );
}

export default withTheme(AgentMoney);

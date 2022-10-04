import { Box, Container, Paper, Typography } from "@mui/material";
import { withTheme } from "@mui/styles";
import React from "react";
import MoneyTable from "./MoneyTable";

function AgentMoney({theme}) {
  console.log(theme.palette.primary.main);
  return (
    // <Container maxWidth="fluid">
      <Box
          elevation={0}
      sx={{
        border:`2px solid ${theme.palette.primary.main}`,
        borderRadius:'8px',
        flexGrow:1,
        p:1,
        mt:5,
      }}
      >
        <Typography variant="h3" my={2}>
          Доход
        </Typography>
        <Paper
          elevation={0}
          sx={{
            width:'30%',
            height:'80px',
            // border:'1px solid red',
            borderRadius:'8px',
          }}
        >

        </Paper>
        {/* <MoneyTable /> */}
      </Box>
    // </Container>
  );
}

export default withTheme(AgentMoney);

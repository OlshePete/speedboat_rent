import { Box, Button } from "@mui/material";
import React from "react";

function AgentPage() {
  return (
    <Box
      sx={{
        m: "auto 0",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: 5,
      }}
    >
      <Box 
      component="Paper"
      sx={{
        minHeight:'80px',
        width:'50%',
        borderRadius:'20px',
        bgcolor:'white',
        display: "flex",
        flexDirection: "column",
        alignItems:'center',
        justifyContent:'center'
      }}
      component="div" variant="outlined" href="new-order">
        Новый заказ
      </Box>
      <Button component="div" variant="outlined" href="check-customer">
        Проверить клиента
      </Button>
      <Button variant="outlined" href="personal-account">
        Личный кабинет
      </Button>
    </Box>
  );
}

export default AgentPage;

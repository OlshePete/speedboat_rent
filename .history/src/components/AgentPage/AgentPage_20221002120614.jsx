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
      <Button 
      sx={{
        minHeight:'80px'
      }}
      component="div" variant="outlined" href="new-order">
        Новый заказ
      </Button>
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

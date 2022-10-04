import { Box, Button } from "@mui/material";
import React from "react";

function AgentPage() {
  return (
    <Box
      sx={{
        m: "auto 0",
        display: "flex",
        flexDirection: "row",
        gap: 5,
      }}
    >
      <Button variant="outlined" href="new-order">
        Новый заказ
      </Button>
      <Button variant="outlined" href="check-customer">
        Проверить клиента
      </Button>
      <Button variant="outlined" href="personal-account">
        Личный кабинет
      </Button>
    </Box>
  );
}

export default AgentPage;

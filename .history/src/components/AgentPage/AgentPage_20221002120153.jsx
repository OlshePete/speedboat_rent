import { Box, Button } from "@mui/material";
import React from "react";

function AgentPage() {
  return (
    <Box
      sx={{
        m: "auto 0",
        display: "flex",
        flexDirection: "row",
        flexWrap:'wrap',
        gap: 5,
      }}
    >
      <Button component="div" variant="outlined" href="new-order" className="">
        Новый заказ
      </Button>
      <Button component="div" variant="outlined" href="check-customer">
        Проверить клиента
      </Button>
      <Button variant="outlined" href="personal-account" fullWidth>
        Личный кабинет
      </Button>
    </Box>
  );
}

export default AgentPage;

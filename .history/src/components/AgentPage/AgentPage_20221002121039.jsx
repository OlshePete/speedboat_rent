import { Box, Button, Paper } from "@mui/material";
import React from "react";

function AgentPage() {
  return (
    <Box
      sx={{
        m: "auto 0",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        // gap: 5,
      }}
    >
      <Box 
      component={Paper}
      sx={{
        minHeight:'80px',
        width:'40%',
        borderRadius:'20px',
        bgcolor:'white',
        display: "flex",
        flexDirection: "column",
        alignItems:'center',
        justifyContent:'center'
      }}
      variant="outlined" href="new-order">
        Новый заказ
      </Box><Box 
      component={Paper}
      sx={{
        minHeight:'80px',
        width:'40%',
        borderRadius:'20px',
        bgcolor:'white',
        display: "flex",
        flexDirection: "column",
        alignItems:'center',
        justifyContent:'center'
      }}
      variant="outlined" href="check-customer">
        Проверить клиента
      </Box>
      {/* <Button component="div" variant="outlined" href="check-customer">
        Проверить клиента
      </Button> */}
      <Button variant="outlined" href="personal-account">
        Личный кабинет
      </Button>
    </Box>
  );
}

export default AgentPage;

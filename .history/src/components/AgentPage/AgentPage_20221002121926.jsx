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
        alignItems:'center',
        justifyContent:'space-between',
        gap: 1,
      }}
    >
      <Box 
      component={Paper}
      sx={{
        minHeight:'80px',
        // width:'40%',
        borderRadius:'16px',
        bgcolor:'white',
        display: "flex",
        flexGrow:1,
        flexDirection: "column",
        alignItems:'center',
        justifyContent:'center'
      }}
      variant="outlined" href="new-order">
        Новый заказ
      </Box>
      <Box 
      component={Paper}
      sx={{
        minHeight:'80px',
        // width:'40%',
        borderRadius:'20px',
        bgcolor:'white',
        display: "flex",
        flexGrow:1,
        flexDirection: "column",
        alignItems:'center',
        justifyContent:'center'
      }}
      variant="outlined" href="check-customer">
        Проверить клиента
      </Box>
      <Box 
      component={Paper}
      sx={{
        minHeight:'80px',
        borderRadius:'20px',
        width:'100%',
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

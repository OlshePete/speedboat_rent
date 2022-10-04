import { Box, Button, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function AgentPage() {
  const navigate = useNavigate()
  const handleClick = (event) => {
    navigate(event.target.id);
  }
  return (
    <Box
      sx={{
        // m: "auto 0",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems:'center',
        justifyContent:'space-between',
        gap: 1,
        width:'100%',
      }}
    >
      <Button 
      onClick={handleClick}
      sx={{
        minHeight:'80px',
        // width:'40%',
        borderRadius:'8px',
        bgcolor:'#f9ce14',
        color:'white',
        display: "flex",
        flexGrow:1,
        flexDirection: "column",
        alignItems:'center',
        justifyContent:'center'
      }}
      variant="outlined" id="new-order">
        Новый заказ
      </Button>
      <Button 
      onClick={handleClick}
      sx={{
        minHeight:'80px',
        // width:'40%',
        borderRadius:'8px',
        bgcolor:'#f31e61',
        color:'white',
        display: "flex",
        flexGrow:1,
        flexDirection: "column",
        alignItems:'center',
        justifyContent:'center'
      }}
      variant="outlined" id="check-customer">
        Проверить клиента
      </Button>
      {/* <Button 
      onClick={handleClick}
      sx={{
        minHeight:'80px',
        borderRadius:'8px',
        width:'100%',
        bgcolor:'#8d4de9',
        color:'white',
        display: "flex",
        flexDirection: "column",
        alignItems:'center',
        justifyContent:'center',

      }}
      variant="outlined" id="personal-account">
        Личный кабинет
      </Button> */}
      {/* <Button component="div" variant="outlined" href="check-customer">
        Проверить клиента
      </Button> 
      <Button variant="outlined" href="personal-account">
        Личный кабинет
      </Button>*/}
    </Box>
  );
}

export default AgentPage;

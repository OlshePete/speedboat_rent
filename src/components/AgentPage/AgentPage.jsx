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
        mt:2,
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
        minHeight:'40px',
        maxHeight:'40px',
        minWidth:'48%',
        maxWidth:'48%',
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
        minHeight:'40px',
        maxHeight:'40px',
        minWidth:'48%',
        maxWidth:'48%',
        borderRadius:'8px',
        bgcolor:'#8d4de9',
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
      
    </Box>
  );
}

export default AgentPage;

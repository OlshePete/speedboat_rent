import { Box, Button, ButtonGroup, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../Buttons/MainButton";

function AgentPage() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate(event.target.id);
  };
  return (
    <Box
      sx={{
        // m: "auto 0",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        width: "100%",
      }}
    >
      <ButtonGroup
        fullWidth
        sx={{
          height: "40px",
          my: 2,
        }}
      >
        <MainButton title="Новый заказ" id="new-order" />
        <MainButton title="Найти заказ" id="check-customer" />
      </ButtonGroup>
    </Box>
  );
}

export default AgentPage;

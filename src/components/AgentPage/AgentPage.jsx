import { Box, Button, ButtonGroup, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../Buttons/MainButton";
import NavPanel from "../NavPanel/NavPanel";

function AgentPage() {
  const [current, setCurrent] = useState(null);

  const navData = [
    {
      title: "Новый заказ",
      id: "new-order",
      onClick: (e) => {
        setCurrent(e.target.id);
      },
    },
    {
      title: "Найти заказ",
      id: "check-customer",
      onClick: (e) => {
        setCurrent(e.target.id);
      },
    },
  ];

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
      <NavPanel navData={navData} />

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

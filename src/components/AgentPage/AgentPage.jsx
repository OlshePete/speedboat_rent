import { Box, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import MainButton from "../Buttons/MainButton";
import NavPanel from "../NavPanel/NavPanel";

function AgentPage() {
  const [current, setCurrent] = useState(null);

  const navData = [
    {
      title: "Новый заказ",
      id: "new-order",
    },
    {
      title: "Найти заказ",
      id: "check-customer",
    },
  ];

  return (
    <Box
      sx={{
        mt: 2,
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
    </Box>
  );
}

export default AgentPage;

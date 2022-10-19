import { Box } from "@mui/material";
import React from "react"; //  { useState }

import NavPanel from "../NavPanel/NavPanel";

function AgentPage() {
  // const [current, setCurrent] = useState(null);

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
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <NavPanel navData={navData} />
    </Box>
  );
}

export default AgentPage;

import { Box } from "@mui/material";
import React, { useState } from "react";
import NavButton from "../Buttons/NavButton";

function NavPanel({ navData }) {
  const [navigationData] = useState(navData);
  return (
    <Box
      sx={{
        bgcolor: "#BBC6C8",
        width: "100%",
        minHeight: "60px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {navigationData &&
        navigationData.map((el, i) => (
          <NavButton key={i} title={el.title} id={el.id} onClick={el.onClick} />
        ))}
    </Box>
  );
}

export default NavPanel;

import { Box } from "@mui/material";
import React, { useState } from "react";
import NavButton from "../Buttons/NavButton";

function NavPanel({ navData }) {
  const [navigation, setNavigation] = useState(navData);

  return (
    <Box
      sx={{
        bgcolor: "#BBC6C8",
        width: { xs: "100vw", sm: "100%" },
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {navigation &&
        navigation.map((el, i) => (
          <NavButton key={i} title={el.title} id={el.id} onClick={el.onClick} />
        ))}
    </Box>
  );
}

export default NavPanel;

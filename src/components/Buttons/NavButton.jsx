import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavButton({ title, id, onClick, logo }) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate(event.target.id);
  };
  return (
    <Button
      id={id}
      onClick={onClick || handleClick}
      sx={{
        mx: 0.5,
        my: 0.9,
        fontSize: { xs: 12, sm: 14 },
        lineHeight: "90%",
        minHeight: 40,
        bgcolor: "#469597",
        color: "#efeeb6",
        textTransform: "uppercase",
        fontWeight: 500,
        borderRadius: 0,
        ":hover": {
          border: "none",
          bgcolor: "#5BA199",
          color: "#efeeb6",
        },
      }}
    >
      {title}
    </Button>
  );
}

export default NavButton;

import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavButton({ title, id, onClick, logo, key, i, ...other }) {
  const navigate = useNavigate;
  const handleClick = (event) => {
    navigate(event.target.id);
  };
  return (
    <Button
      id={id}
      onClick={onClick || handleClick}
      sx={{
        m: 1,
        fontSize: 12,
        lineHeight: "130%",
        height: 52,
        maxWidth: "20%",
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

import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function MainButton(props) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate(event.target.id);
  };

  return (
    <Button
      disabled={props.disabled}
      type={props.type}
      fullWidth
      sx={{
        fontSize: props.fz || { xs: 14, sm: 18 },
        lineHeight: "100%",
        minHeight: "50px",
        height: props.height,
        width: props.width,
        bgcolor: props.bg || "#469597",
        color: props.color || "#efeeb6",
        textTransform: "uppercase",
        fontWeight: 600,
        ":hover": { bgcolor: props.hoverbg || "#5BA199", color: "#efeeb6" },
      }}
      id={props.id}
      onClick={props.onClick || handleClick}
    >
      {props.title}
    </Button>
  );
}

export default MainButton;

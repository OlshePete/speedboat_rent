import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function MainButton({
  disabled,
  type,
  fz,
  height,
  width,
  bg,
  color,
  hoverbg,
  id,
  onClick,
  title,
}) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate(event.target.id);
  };

  return (
    <Button
      disabled={disabled}
      type={type}
      fullWidth
      sx={{
        fontSize: fz || { xs: 14, sm: 18 },
        lineHeight: "100%",
        minHeight: "50px",
        height: height,
        width: width,
        bgcolor: bg || "#469597",
        color: color || "#efeeb6",
        textTransform: "uppercase",
        fontWeight: 600,
        ":hover": {
          border: "none",
          bgcolor: hoverbg || "#5BA199",
          color: "#efeeb6",
        },
      }}
      id={id}
      onClick={onClick || handleClick}
    >
      {title}
    </Button>
  );
}

export default MainButton;

import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Button size="small" id="info-page" onClick={handleClick}>
      <HomeIcon sx={{ color: "#469597" }} />
    </Button>
  );
}

export default HomeButton;

import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function InfoButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/info-page");
  };
  return (
    <Button
      size="small"
      id="info-page"
      onClick={handleClick}
      sx={{ width: "10px" }}
    >
      <InfoIcon sx={{ color: "#469597" }} />
    </Button>
  );
}

export default InfoButton;

import { Box, Button } from "@mui/material";
import React from "react";

function PersonalPageButton(props) {
  return (
    <Button href={props.href} variant="outlined" sx={{ m: "1px" }}>
      {props.title}
      <br />
      {props.value}
    </Button>
  );
}

export default PersonalPageButton;

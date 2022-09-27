import { Button, ButtonGroup } from "@mui/material";
import React, { useRef } from "react";

function ButtonGroupSpot({ handleClick, value }) {
  const groupRef = useRef(null);
  return (
    <ButtonGroup
      ref={groupRef}
      size="small"
      aria-label="spot button group"
      className="button-group-spot"
    >
      {[1, 2, 3, 4, 5, 6].map((el, index) => {
        return (
          <Button
            key={`button-${index}`}
            onClick={(e) => handleClick(e)}
            variant={value === el ? "contained" : "outlined"}
            id={String(el)}
          >
            {el}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

export default ButtonGroupSpot;

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
      sx={{ height: 30 }}
      color="secondary"
    >
      {[1, 2, 3, 4, 5, 6].map((el, index) => {
        return (
          <Button
            sx={{
              color: "#efeeb6",

              bgcolor: "#ba9e70",
              ":hover": { bgcolor: "#ba9e70", opacity: 0.7 },
            }}
            key={`button-${index}`}
            onClick={(e) => handleClick(e)}
            variant="contained"
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

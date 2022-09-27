import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import Clock from "react-live-clock";

function HeaderBar() {
    const now = new Date();
    const dateOptions = {
        day:'numeric',
        month:'long',
        year:'numeric'
    };
    const DateNow = new Intl.DateTimeFormat('ru', dateOptions)
  return (
    <AppBar>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography component={"span"}>Агент</Typography>
            <Typography component={"span"}>Иванов В.В.</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems:'flex-end'
            }}
          >
            {
                DateNow.format(now)
            }
            <Clock format={"HH:mm:ss"} ticking={true} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;

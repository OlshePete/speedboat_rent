import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import Clock from "react-live-clock";
import { useSelector } from "react-redux";

function HeaderBar() {
    const now = new Date();
    const dateOptions = {
        day:'numeric',
        month:'long',
        year:'numeric'
    };
    const DateNow = new Intl.DateTimeFormat('ru', dateOptions)
    const {
      userRole,
      userLogin
    } = useSelector((state)=>state.speedboat)
    const getRoleString = () =>{
      if (userRole==="admin") return "Администратор"
      if (userRole==="agent") return "Агент по продажам"
    }
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
            <Typography component={"span"}>{userRole}</Typography>
            <Typography component={"span"}>{getRoleString()}</Typography>
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

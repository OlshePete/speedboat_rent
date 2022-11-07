import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import Clock from "react-live-clock";
import { useSelector } from "react-redux";
import HomeButton from "../Buttons/HomeButton";
import InfoButton from "../Buttons/InfoButton";

function HeaderBar() {
  const now = new Date();
  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const DateNow = new Intl.DateTimeFormat("ru", dateOptions);
  const { userRole, userLogin } = useSelector((state) => state.speedboat);
  const getRoleString = () => {
    if (userRole === "admin") return "Администратор";
    if (userRole === "agent") return "Агент по продажам";
  };
  const style = { text: { fontSize: { xs: 12, sm: 14 } } };
  return (
    <AppBar
      sx={{
        bgcolor: "#2D4628",
        opacity: 0.8,
        height: 46,
      }}
      elevation={0}
    >
      <Container maxWidth="sm" sx={{ height: "100%" }}>
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            color: "#efeeb6",
            height: "100%",
            py: 0.3,
          }}
        >
          <Box>
            <Typography sx={style.text}>
              {userLogin} <br /> {getRoleString()}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
            }}
          >
            <HomeButton />
            <InfoButton />
            <Typography sx={style.text}>
              {DateNow.format(now)} <br />
              <Clock format={"HH:mm:ss"} ticking={true} />
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderBar;

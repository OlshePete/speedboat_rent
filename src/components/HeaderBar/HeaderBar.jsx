import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import Clock from "react-live-clock";
import { useSelector } from "react-redux";

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
  const style = { text: { fontSize: { xs: 14, sm: 18 } } };
  return (
    <AppBar
      sx={{
        bgcolor: "#2D4628",
        opacity: 0.8,
      }}
      elevation={0}
    >
      <Container maxWidth="sm">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-between",
              alignItems: "center",
              color: "#efeeb6",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography sx={style.text} component={"span"}>
                {userLogin}
              </Typography>
              <Typography sx={style.text} component={"span"}>
                {getRoleString()}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography sx={style.text}>{DateNow.format(now)}</Typography>
              <Typography sx={style.text}>
                {" "}
                <Clock format={"HH:mm:ss"} ticking={true} />
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderBar;

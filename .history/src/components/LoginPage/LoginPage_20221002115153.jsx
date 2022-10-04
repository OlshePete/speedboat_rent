import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SigninForm from "./SigninForm";

function LoginPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
      const {
      isAuth
    } = useSelector((state)=>state.speedboat)
    useEffect(() => {
      if (isAuth) navigate('/dashboard')
    }, [isAuth])
    
  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          "& .MuiInputBase-root": {
            fontSize: "24px",
            // backgroundColor:'white'
          },
          "& .MuiButtonBase-root": {
            backgroundColor: "white",
          },
        }}
      >
        <Typography variant="h3">LoginPage</Typography>
        {
        <SigninForm/>}
      </Box>
  );
}

export default LoginPage;

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = () => {
    navigate("/agent");
  };
  const isFilled = name.length > 0 && password.length > 0;
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
        <TextField
        size="small"
          id="outlined-name"
          label="Name"
          required
          value={name}
          onChange={handleChangeName}
        />
        <TextField
        size="small"
          id="outlined-uncontrolled"
          type="password"
          label="password"
          value={password}
          onChange={handleChangePass}
          required
        />
         <Button onClick={handleClick} type="submit" variant="outlined">Login</Button>
      </Box>
  );
}

export default LoginPage;

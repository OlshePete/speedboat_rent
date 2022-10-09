import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import CustomerList from "./CustomerList";
import { customers } from "../../data/customersData";
import { useNavigate } from "react-router-dom";
import MainButton from "../Buttons/MainButton";

function CheckPage() {
  const navigate = useNavigate();
  const [customerList] = useState(customers);

  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MainButton
          title="Вернуться на страницу агента"
          onClick={() => navigate(-1)}
        />
        <TextField
          size="small"
          placeholder="Введите фамилию, либо номер телефона клиента:"
          sx={{
            width: "100%",
            my: 2,
            borderRadius: "8px",
          }}
        />
        <MainButton title="Поиск" fz="22px" />
        <Box sx={{ my: 2 }}>
          {customers && <CustomerList customers={customerList} />}
        </Box>
      </Box>
    </Container>
  );
}

export default CheckPage;

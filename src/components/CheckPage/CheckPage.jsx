import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import CustomerList from "./CustomerList";
import { customers } from "../../data/customersData";
import { useNavigate } from "react-router-dom";

function CheckPage() {
  const navigate = useNavigate();
  const [customerList] = useState(customers);

  return (
    <Container maxWidth="sm" sx={{ mt: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            minHeight: "40px",
            width: "100%",
            borderRadius: "8px",
            bgcolor: "#f9ce14",
            ":hover": { bgcolor: "lightblue" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            m: 1,
          }}
          onClick={() => navigate(-1)}
        >
          {/* <ArrowBackIcon fontSize="small" /> */}
          <Typography variant="caption">
            Вернуться на страницу агента
          </Typography>
        </Button>
        <TextField
          size="small"
          placeholder="Введите фамилию, либо номер телефона клиента:"
          sx={{
            width: "100%",
            my: 2,
            borderRadius: "8px",
          }}
        />
        <Button
          sx={{
            minHeight: "40px",
            width: "100%",
            borderRadius: "8px",
            bgcolor: "lightgreen",
            ":hover": { bgcolor: "lightpink" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            m: 1,
          }}
        >
          Поиск
        </Button>
        {customers && <CustomerList customers={customerList} />}
      </Box>
    </Container>
  );
}

export default CheckPage;

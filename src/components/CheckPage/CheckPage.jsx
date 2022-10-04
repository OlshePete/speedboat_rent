import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import CustomerList from "./CustomerList";
import { customers } from "../../data/customersData";

function CheckPage() {
  const [customerList] = useState(customers);

  return (
    <Container maxWidth="fluid" sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography>Введите фамилию либо номер телефона клиента</Typography>
        <TextField
          size="small"
          sx={{
            width: "100%",
            my: 2,
          }}
        />
        <Button
          sx={{
            width: "100%",
            mb: 2,
          }}
          variant="outlined"
        >
          Поиск
        </Button>
        {customers && <CustomerList customers={customerList} />}
      </Box>
    </Container>
  );
}

export default CheckPage;

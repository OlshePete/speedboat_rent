import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { customers } from "../../data/customersData";
import PersonalPageButton from "../Buttons/PersonalPageButton";
import AgentCustomersList from "./AgentCustomerList";

function PersonalPage() {
  const [myCustomersList] = useState(customers);

  return (
    <Container maxWidth="fluid">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Box>
          <PersonalPageButton title="Баланс" value="4500" href="agent-money" />
          <PersonalPageButton title="Мой аккаунт" value="Иванов И. И." />
          <PersonalPageButton title="Добавить клиента" href="new-order" />
        </Box>
        <Box>
          <Typography align="center" m={2} variant="h4">
            Мои клиенты
          </Typography>
          <AgentCustomersList customers={myCustomersList} />
        </Box>
      </Box>
    </Container>
  );
}

export default PersonalPage;

import { Box, ButtonGroup, Container, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import MainButton from "../Buttons/MainButton";
import CustomerList from "../CheckPage/CustomerList";
import { customers } from "../../data/customersData";
import { agents } from "../../data/agentsData";
import AgentsList from "./AgentsList";

function AdminDashboard() {
  const [agentsList] = useState(agents);
  const [showAgentList, setShowAgentList] = useState(true);
  const agentHandler = () => {
    setShowCustomerList(false);
    setShowAgentList(true);
  };
  const [customersList] = useState(customers);
  const [showCustomerList, setShowCustomerList] = useState(false);
  const customerHandler = () => {
    setShowAgentList(false);
    setShowCustomerList(true);
  };

  return (
    <Container sx={{ mt: 2 }} maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <ButtonGroup sx={{ width: "100%" }} orientation="horizontal">
          <MainButton title="Новый агент" />
          <MainButton title="Новый заказ" id="new-order" />
        </ButtonGroup>{" "}
        <ButtonGroup sx={{ width: "100%" }} orientation="horizontal">
          <MainButton title="Список агентов" onClick={agentHandler} />
          <MainButton title="Список заказов" onClick={customerHandler} />
        </ButtonGroup>
      </Box>
      <Box sx={{ mt: 2 }}>
        {showCustomerList === true && (
          <Box>
            <Typography sx={{ my: 1 }} variant="h4" textAlign="center">
              Клиенты
            </Typography>
            <CustomerList customers={customersList} />
          </Box>
        )}
        {showAgentList === true && (
          <Box>
            <Typography sx={{ my: 1 }} variant="h4" textAlign="center">
              Агенты
            </Typography>
            <AgentsList agents={agentsList} />
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default AdminDashboard;

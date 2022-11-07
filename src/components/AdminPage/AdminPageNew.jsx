import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomerList from "../CheckPage/CustomerList";
import AgentsList from "./AgentsList";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import NewAgentWrapper from "../NewAgentWrapper/NewAgentWrapper";
import InfoPage from "../InfoPage/InfoPage";

import NavPanel from "../NavPanel/NavPanel";

function AdminDashboard() {
  const [current, setCurrent] = useState(null);
  const [data, setData] = useState(null);

  const navData = [
    {
      title: "новый агент",
      id: "new-agent",
      onClick: (e) => {
        setCurrent(e.target.id);
      },
    },
    {
      title: "новый заказ",
      id: "new-order",
      onClick: (e) => {
        setCurrent(e.target.id);
      },
    },
    {
      title: "Список агентов",
      id: "agent-list",
      onClick: (e) => {
        setCurrent(e.target.id);
      },
    },
    {
      title: "Список заказов",
      id: "order-list",
      onClick: (e) => {
        setCurrent(e.target.id);
      },
    },
    {
      title: "Список клиентов",
      id: "client-list",
      onClick: (e) => {
        setCurrent(e.target.id);
      },
    },
  ];

  // async function getAllAgents() {
  //   const response = await fetch(`/data/all-users`);
  //   const res = await response.json();
  //   return res;
  // }

  useEffect(() => {}, []);

  const switchCurrentWrapper = (current) => {
    switch (current) {
      case "new-agent":
        return <NewAgentWrapper />;
      case "new-order":
        return <NewOrderPage />;
      case "agent-list":
        return (
          <Box>
            <Typography sx={{}} variant="block_title" textAlign="center">
              Агенты
            </Typography>
            <AgentsList agents={data} />
          </Box>
        );
      case "order-list":
        return (
          <Box>
            <Typography sx={{}} variant="block_title" textAlign="center">
              Заказы
            </Typography>
            <CustomerList orders={data} />
          </Box>
        );
      case "client-list":
        return (
          <Box>
            <Typography sx={{}} variant="block_title" textAlign="center">
              Клиенты
            </Typography>
            <CustomerList orders={data} />
          </Box>
        );

      default:
        return (
          <Box>
            <Typography sx={{ fontSize: 32, textAlign: "center" }}>
              Добро пожаловать на страницу администратора
            </Typography>
          </Box>
        );
    }
  };
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", height: "95%" }}
      maxWidth="sm"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <NavPanel navData={navData} />
      </Box>
      <Box sx={{ minHeight: "300px", flexGrow: 1, overflowY: "scroll" }}>
        {switchCurrentWrapper(current)}
      </Box>
    </Container>
  );
}

export default AdminDashboard;

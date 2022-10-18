import { Box, ButtonGroup, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import MainButton from "../Buttons/MainButton";
import CustomerList from "../CheckPage/CustomerList";
import AgentsList from "./AgentsList";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import NewAgentWrapper from "../NewAgentWrapper/NewAgentWrapper";
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
  ];

  async function getAllAgents() {
    const response = await fetch(`/data/all-agents`);
    const res = await response.json();
    return res;
  }
  async function getAllOrders() {
    const response = await fetch(`/data/all-orders`);
    const res = await response.json();
    return res;
  }
  const fetchData = async (setData, func) => {
    const data = await func();
    setData([...data]);
  };
  function checklist(current, string = "") {
    return current.indexOf(string) !== -1;
  }
  useEffect(() => {
    if (current) {
      if (checklist(current, "-list")) {
        if (current.indexOf("agent") !== -1) {
          fetchData(setData, getAllAgents);
        }
        if (current.indexOf("order") !== -1) {
          fetchData(setData, getAllOrders);
        }
      }
    }
  }, [current]);

  const handleChangeCurrent = (event) => {
    setCurrent(event.target.id);
  };

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
      default:
        return <></>;
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

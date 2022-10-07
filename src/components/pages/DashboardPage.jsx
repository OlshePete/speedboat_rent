import { Box, Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AgentMoney from "../AgentMoneyPage/AgentMoney";
import AgentPage from "../AgentPage/AgentPage";

const AgentDashboard = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
        gap: 1,
      }}
    >
      <AgentPage />
      <AgentMoney />
    </Container>
  );
};

function DashboardPage() {
  const { userRole } = useSelector((state) => state.speedboat);
  if (userRole === "agent") return <AgentDashboard />;
  return <div>DashboardPage</div>;
}

export default DashboardPage;

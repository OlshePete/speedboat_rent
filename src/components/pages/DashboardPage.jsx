import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AdminPage from "../AdminPage/AdminPage";
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
      }}
    >
      <AgentPage />
      <AgentMoney />
    </Container>
  );
};

const AdminDashboard = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
      }}
    >
      <AdminPage />
    </Container>
  );
};

function DashboardPage() {
  const { userRole } = useSelector((state) => state.speedboat);
  if (userRole === "agent") return <AgentDashboard />;
  if (userRole === "admin") return <AdminDashboard />;

  return <div>DashboardPage</div>;
}

export default DashboardPage;

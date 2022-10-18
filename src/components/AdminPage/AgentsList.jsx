import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Card } from "@mui/material";

export default function AgentsList({ agents }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: "4px",
      }}
    >
      {agents &&
        [...agents].map((agent, index) => (
          <Card
            key={"checkcustomer_card" + index}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "justify",
              p: 1,
              mb: 1,
            }}
          >
            <Box
              sx={{
                bgcolor: "inherit",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 1,
                    alignItems: { md: "flex-start", xs: "left" },
                  }}
                >
                  <Typography variant="customer_name">
                    Имя: {agent.agent_name}
                  </Typography>
                  <Typography variant="customer_phone">
                    Номер: {agent.agent_phone}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: { md: "flex-end", xs: "left" },
                    flexWrap: "wrap",
                    gap: 1,
                    mt: { xs: 1, sm: 0 },
                  }}
                >
                  <Typography variant="spots">
                    Всего заказов/билетов: {agent.total_orders}/
                    {agent.total_ticket}
                  </Typography>
                  <Typography variant="timespot">
                    Дата последней продажи: {agent.last_sale}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
    </Box>
  );
}

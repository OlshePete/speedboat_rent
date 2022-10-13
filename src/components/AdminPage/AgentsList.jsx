import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Card } from "@mui/material";

export default function AgentsList(props) {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {props.agents &&
        props.agents.map((el, i) => (
          <Card
            key={"checkcustomer_card" + i}
            sx={{
              position: "relative",
              width: "100%",
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
                    Имя: {el.name}
                  </Typography>
                  <Typography variant="customer_phone">
                    Номер: {el.phone}
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
                    Заработано: {el.agentMoney}
                  </Typography>
                  <Typography variant="timespot">
                    Дата регистрации: {el.registrationDate}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
    </Box>
  );
}

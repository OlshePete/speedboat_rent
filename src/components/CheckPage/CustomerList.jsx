import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Card, Container } from "@mui/material";

export default function CustomerList(props) {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {props.customers &&
        props.customers.map((el, i) => (
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
                  <Typography variant="route">Маршрут: {el.route}</Typography>
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
                  }}
                >
                  <Typography variant="timespot">Дата: {el.date}</Typography>
                  <Typography variant="spots">
                    Кол-во билетов: {el.spots}
                  </Typography>
                  <Typography
                    variant="is_paid"
                    sx={{
                      color: !el.is_paid ? "#dbba2d" : "#99ce65",
                    }}
                  >
                    {el.is_paid ? "Оплачен" : "Ожидает оплаты"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
    </Box>
  );
}

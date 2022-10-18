import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Card } from "@mui/material";

export default function CustomerList({orders}) {
  return (
    <Box sx={{}}>
      {orders &&
        orders.map((order, index) => (
          <Card
            key={"order-list-card" + index}
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
                  <Typography variant="route">Маршрут: {order.route_name}</Typography>
                  <Typography variant="customer_name">
                    Имя: {order.user_name}
                  </Typography>
                  <Typography variant="customer_phone">
                    Номер: {order.user_phone}
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
                  <Typography variant="timespot">Дата: {order.order_date}</Typography>
                  <Typography variant="spots">
                    Кол-во билетов: {order.total_persons}
                  </Typography>
                  <Typography
                    variant="is_paid"
                    sx={{
                      color: !order.is_paid ? "#dbba2d" : "#99ce65",
                    }}
                  >
                    {order.is_paid ? "Оплачен" : "Ожидает оплаты"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
    </Box>
  );
}

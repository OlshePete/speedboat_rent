import { Box, Button, Typography } from "@mui/material";
import React from "react";

function InfoItem({ title, text, date }) {
  return (
    <Box sx={{ my: 2, p: 2, pb: 4, bgcolor: "#F6DC8D", position: "relative" }}>
      <Typography fontSize={18} fontWeight={500} sx={{ opacity: 0.5 }}>
        {date}
      </Typography>
      <Typography fontSize={20} fontWeight={600} sx={{ opacity: 0.6 }}>
        {title}
      </Typography>
      <Typography
        fontSize={16}
        fontWeight={400}
        textAlign="justify"
        sx={{ opacity: 0.9 }}
      >
        {text}
      </Typography>
      <Button
        sx={{
          fontWeight: 600,
          position: "absolute",
          bottom: 0,
          right: 0,
          m: 2,
          fontSize: 10,
          size: "small",
          bgcolor: "#469597",
          color: "#efeeb6",
          ":hover": {
            border: "none",
            bgcolor: "#5BA199",
            color: "#efeeb6",
          },
        }}
      >
        Читать
      </Button>
    </Box>
  );
}

export default InfoItem;

import { Box, Typography } from "@mui/material";
import React from "react";
import MoneyTable from "./MoneyTable";

const getLabel = (index) => {
  switch (index) {
    case 0:
      return ["Всего заказов", "Всего заработано"];
    case 1:
      return ["Заказов за месяц", "Заработано за месяц"];

    case 2:
      return ["Заказов за неделю", "Заработано за неделю"];

    case 3:
      return ["Заказов сегодня", "Заработано сегодня"];
    default:
      return null;
  }
};
function SummaryPanel(props) {
  const { children, value, index, theme, ...other } = props;
  console.log(index);
  const labelArr = getLabel(index);
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          m: 1,
        }}
      >
        <Typography as="div" align="left" minWidth={"100%"} variant="subtitle1">
          {labelArr[0]}: 5
        </Typography>
        <Typography as="div" align="left" minWidth={"100%"} variant="subtitle1">
          {labelArr[1]}: 2000
        </Typography>
        <Typography variant="h5" align="left">
          Заказы:
        </Typography>
      </Box>
      <MoneyTable index={index} />
    </Box>
  );
}

export default SummaryPanel;

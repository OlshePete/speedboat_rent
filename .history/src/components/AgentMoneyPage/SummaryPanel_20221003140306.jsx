import { Box, Typography } from "@mui/material";
import React from "react";

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
  const { children, value, index, ...other } = props;
  const labelArr = getLabel(index);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {labelArr && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexWrap:'wrap',
            "&>*": {
              width: "100%",
            },
          }}
        >
          <Typography as="div" align="rigth" minWidth={'100%'} variant="subtitle1">{labelArr[0]}: 5</Typography>
          <Typography as="div" align="rigth" minWidth={'100%'} variant="subtitle1">{labelArr[1]}: 2000</Typography>
        </Box>
      )}
    </div>
  );
}

export default SummaryPanel;

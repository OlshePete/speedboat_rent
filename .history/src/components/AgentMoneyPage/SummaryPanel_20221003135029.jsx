import { Box, Typography } from '@mui/material';
import React from 'react'

function SummaryPanel(props) {
 const { children, value, index, ...other } = props;
const labelArr = [
    "всего",
    "месяц",
    "неделя",
    "сегодня"
]
const getLabel = () => {
    switch (index) {
        case 0:
            return ["Всего заказов", "Всего заработано"]
        case 1:
            return ["Заказов за месяц", "Заработано за месяц"]
    
        case 2:
            return ["Заказов за неделю", "Заработано за неделю"]
    
        case 3:
            return ["Заказов сегодня", "Заработано сегодня"]
        default:
            return undefined
    }
}
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
            <Typography variant="subtitle1" >
       {getLabel()[0]}: 5
      </Typography>
        <Typography variant="subtitle1" >
        Заработано сегодня: 2000
      </Typography>
        </Box>
      )}
    </div>
  );
}

export default SummaryPanel
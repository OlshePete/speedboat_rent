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
        Заказов сегодня: 5
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
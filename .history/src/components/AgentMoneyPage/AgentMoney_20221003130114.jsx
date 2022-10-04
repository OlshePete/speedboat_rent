import { Box, Button, ButtonGroup, Container, Paper, Tab, Tabs, Typography } from "@mui/material";
import { withTheme } from "@mui/styles";
import React from "react";
import MoneyTable from "./MoneyTable";
import SummaryPanel from "./SummaryPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function AgentMoney({ theme }) {
    const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper
      sx={{
        borderRadius: "8px",
        flexGrow: 1,
        p:1,
      }}
    >
      {/* <Box
        sx={{
        // border: `1px solid ${theme.palette.primary.main}`,
          width: "100%",
          height: "80px",
          border:'1px solid red',
          borderRadius: "8px",
        }}
      > */}
      <Typography variant="h5" align="right" sx={{minWidth:'100%'}}>
        Личный кабинет
      </Typography>
      <Box
        sx={{
        // border: `1px solid ${theme.palette.primary.main}`,
          maxWidth: "100%",
          borderRadius: "8px",
          flex:'auto',
        }}
      >
      <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example" centered>
          <Tab variant="outlined" label="всего" {...a11yProps(0)} />
          <Tab label="месяц" {...a11yProps(1)} />
          <Tab label="неделя" {...a11yProps(2)} />
          <Tab label="сегодня" {...a11yProps(3)} />
        </Tabs>
      </Box>
     <Box
        sx={{
        // border: `1px solid ${theme.palette.primary.main}`,
          width: "100%",
          height: "80px",
          border:'1px solid red',
          borderRadius: "8px",
        }}
      >
        
<SummaryPanel value={value} index={0}>
  Item One
</SummaryPanel>
<SummaryPanel value={value} index={1}>
  Item Two
</SummaryPanel>
<SummaryPanel value={value} index={2}>
  Item Three
</SummaryPanel>
      
      </Box>
      <Typography variant="body2" >
        Мои заказы
      </Typography>
      <Typography variant="body2" >
        Мои заказы
      </Typography>
      {/* </Box> */}
      {/* <MoneyTable /> */}
    </Paper>
  );
}

export default withTheme(AgentMoney);

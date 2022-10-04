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
        display:'flex',
        flexDirection:'column',
        gap:0.5,
        maxWidth:'100%',
        bgcolor:'#f5f5ff',
      }}
    >
      <Box
        sx={{
        // border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "8px",
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
          width: "100%",
          borderRadius: "8px",
          flexGrow:1,
        }}
      >
        {
          [0,1,2,3].map((element, index)=>{
            return <SummaryPanel key={"summary-panel-"+index} value={value} index={element} theme={theme}/>
          })
        }
      </Box>
    </Paper>
  );
}

export default withTheme(AgentMoney);

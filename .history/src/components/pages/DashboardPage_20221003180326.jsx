import { Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import AgentMoney from '../AgentMoneyPage/AgentMoney';
import AgentPage from '../AgentPage/AgentPage';

const AgentDashboard = () => {
    return <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            maxWidth:'100vw',
            minWidth:'100vw',
            gap:1,
            overflow:'hidden',
            border:'2px solid green'
        }}
    >
       {/* <AgentMoney/> 
       <AgentPage/> */}
    </Box>
}

function DashboardPage() {
    const { userRole } = useSelector(state => state.speedboat);
    if (userRole === "agent") return <AgentDashboard/>
    return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage
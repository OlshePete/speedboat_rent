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
            maxWidth:'100%',
            minWidth:'100%',
            gap:1,
            overflow:'hidden',
            border:'2px solid blue'
        }}
    >
       {/* <AgentMoney/>  */}
       <AgentPage/>
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
import React from 'react'
import { useSelector } from 'react-redux';
import AgentPage from '../AgentPage/AgentPage';

function DashboardPage() {
    const { userRole } = useSelector(state => state.speedboat);
    if (userRole === "agent") return <AgentPage/>
    return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage
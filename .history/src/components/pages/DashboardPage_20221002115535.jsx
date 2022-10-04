import React from 'react'
import { useSelector } from 'react-redux';
import AgentMoney from '../AgentMoneyPage/AgentMoney';
import AgentPage from '../AgentPage/AgentPage';

function DashboardPage() {
    const { userRole } = useSelector(state => state.speedboat);
    if (userRole === "agent") return <><AgentPage/><AgentMoney/></>
    return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage
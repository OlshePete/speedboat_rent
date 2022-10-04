import { Paper } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderBar from '../HeaderBar/HeaderBar'

function MainOutlet() {
  return (
    <Paper
      sx={{
        minWidth: "calc(100vw - 56px)",
        maxWidth: "calc(100vw - 56px)",
        height: "calc(100vh - 56px)",
        backgroundColor: "#e9ecef",
        overflow: "hidden",
        display: "flex",
        pt:"56px",
        justifyContent: "center",
      }}
    >
        <HeaderBar/>
        <Outlet/>
    </Paper>
  )
}

export default MainOutlet
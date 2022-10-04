import { Paper } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderBar from '../HeaderBar/HeaderBar'

function MainOutlet() {
  return (
    <Paper
      sx={{
        minWidth: "100vw",
        maxWidth: "100vw",
        minHeight: "90vh",
        maxHeight: "90vh",
        backgroundColor: "#e9ecef",
        // backgroundColor: "#8d0f24",
        overflow: "hidden",
        display: "flex",
        pt:"60px",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
        <HeaderBar/>
        <Outlet/>
    </Paper>
  )
}

export default MainOutlet
import { Paper } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderBar from '../HeaderBar/HeaderBar'

function MainOutlet() {
  return (
    <Paper
      sx={{
        minWidth: "calc(100vw - 6px)",
        maxWidth: "calc(100vw - 6px)",
        height: "calc(100vh)",
        backgroundColor: "#e9ecef",
        overflow: "hidden",
        display: "flex",
        // mt:"56px",
        justifyContent: "center",
      }}
    >
        {/* <HeaderBar/> */}
        <Outlet/>
    </Paper>
  )
}

export default MainOutlet
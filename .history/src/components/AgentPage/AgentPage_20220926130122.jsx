import { Box, Button } from '@mui/material'
import React from 'react'

function AgentPage() {
  return (
    <Box
        sx={{
            m:"auto 0",
            display:'flex',
            flexDirection:'column',
            gap:5
        }}
    >
        <Button variant="outlined" href="new-order">Новый заказ</Button>
        <Button variant="outlined">Проверить клиента</Button>
        <Button variant="outlined">Личный кабинет</Button>
    </Box>
  )
}

export default AgentPage
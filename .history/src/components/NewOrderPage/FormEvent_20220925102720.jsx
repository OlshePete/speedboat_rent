import { Box, Button, TextField } from '@mui/material';
import {useState} from 'react';

const FormEvent = ({title, handleClick}) => {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')

    return (
        <Box>
            <TextField
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="phone"
            />
            <TextField
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="customer name"
            />
            <Button
            variant='filled'
                onClick={() => handleClick(phone, name)}
            >
                {title}
            </Button>
        </Box>
    )
}

export {FormEvent}
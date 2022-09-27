import { Box, Button, TextField } from '@mui/material';
import { MuiTelInput,matchIsValidTel  } from 'mui-tel-input';
import {useState} from 'react';

const FormEvent = ({title, handleClickSubmit}) => {
  const [phone, setPhone] = useState('+7')
  const [name, setName] = useState('')
const handleChangePhone = (newValue) => {
  setPhone(newValue)
  console.log(String(newValue));
  console.log(String(newValue).replace(/ /g, ""));
}
    return (
        <Box
          sx={{
            display:'flex',
            flexDirection:'column',
            gap:1
          }}
        >
            <MuiTelInput 
                label="номер телефона"
                value={phone}
                onChange={handleChangePhone}
                
                // placeholder="phone"
            />
            <TextField
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="customer name"
            />
            <Button
                variant='contained'
                disabled={!matchIsValidTel(phone)}
                onClick={() => handleClickSubmit(phone, name)}
            >
                {title}
            </Button>
        </Box>
    )
}

export {FormEvent}
import { Box, Button, TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import {useState} from 'react';

const FormEvent = ({title, handleClickSubmit}) => {
  const [phone, setPhone] = useState('+7')
  const [name, setName] = useState('')

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
                onChange={(e) => {console.log(e.length); if(e.length<17) {setPhone(e)} else  setPhone(e.substring(0,16))
                }}
                
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
                onClick={() => handleClickSubmit(phone, name)}
            >
                {title}
            </Button>
        </Box>
    )
}

export {FormEvent}
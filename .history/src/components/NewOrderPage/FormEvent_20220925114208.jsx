import { Box, Button, TextField } from '@mui/material';
import { MuiTelInput,matchIsValidTel  } from 'mui-tel-input';
import {useState} from 'react';

const FormEvent = ({title, handleClickSubmit}) => {
  const [phone, setPhone] = useState('+7')
  const [name, setName] = useState('')
const handleChangePhone = (newValue, info) => {
  console.log(info.nationalNumber);
  if (String(newValue).replace(/ /g, "").length<=12) {
    setPhone(newValue)
  } else {
    setPhone(String(newValue).substring(0,newValue.length-1))
  }
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
                 onlyCountries={['RU']}
                label="номер телефона"
                value={phone}
                onChange={handleChangePhone}
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
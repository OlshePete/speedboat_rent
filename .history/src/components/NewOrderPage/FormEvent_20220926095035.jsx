import { Box, Button, TextField } from '@mui/material';
import { MuiTelInput,matchIsValidTel  } from 'mui-tel-input';
import {useState} from 'react';

const FormEvent = ({title, handleClickSubmit}) => {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [info, setInfo] = useState(null)
const handleChangePhone = (newValue, info) => {
  setInfo(info);
  if (info.nationalNumber.length<=10) {
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
            <TextField
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="customer name"
            />
            <MuiTelInput 
                defaultCountry="RU"
                // onlyCountries={['RU']}
                label="номер телефона"
                value={phone}
                onChange={handleChangePhone}
            />
            <Button
                variant='contained'
                disabled={!matchIsValidTel(phone)}
                onClick={() => handleClickSubmit(phone, name, info)}
            >
                {title}
            </Button>
        </Box>
    )
}

export {FormEvent}
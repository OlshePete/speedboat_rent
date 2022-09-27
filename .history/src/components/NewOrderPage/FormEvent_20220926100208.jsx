import { Box, Button, TextField } from '@mui/material';
import { MuiTelInput,matchIsValidTel  } from 'mui-tel-input';
import {useState} from 'react';

const FormEvent = ({title, handleClickSubmit}) => {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [info, setInfo] = useState(null)
  const [check, setCheck] = useState(false)
const handleChangePhone = (newValue, info) => {
  setInfo(info);
  if (info.nationalNumber.length<=10) {
    setPhone(newValue)
  } else {
    setPhone(String(newValue).substring(0,newValue.length-1))
  }
}
const handleButtonSubmit = () => {
  setCheck(!check)
//  handleClickSubmit(phone, name, info)
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
            {
              check && <TextField
                  type="number"
                  // value={name}
                  onChange={(e) => console.log(e.target.value)}
                  placeholder="Код из СМС"
              />
            }
            
            <Button
                variant='contained'
                disabled={!matchIsValidTel(phone)}
                onClick={handleButtonSubmit}
            >
                {title}
            </Button>
        </Box>
    )
}

export {FormEvent}
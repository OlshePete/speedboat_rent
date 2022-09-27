import { Box, Button, Collapse, TextField } from '@mui/material';
import { MuiTelInput,matchIsValidTel  } from 'mui-tel-input';
import {useEffect, useRef, useState} from 'react';

const FormEvent = ({handleClickSubmit}) => {
  const codeButtonRef = useRef(null)
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [info, setInfo] = useState(null)
  const [check, setCheck] = useState(false)
  useEffect(() => {
    if (check && codeButtonRef.current){
      codeButtonRef.current.focus()
    } 
    
  }, [check,codeButtonRef])
  
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
                disabled={check}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="customer name"
            />
            <MuiTelInput 
                disabled={check}
                defaultCountry="RU"
                // onlyCountries={['RU']}
                label="номер телефона"
                value={phone}
                onChange={handleChangePhone}
            />
            <Collapse
              in={check} timeout="auto" unmountOnExit
            >
            <TextField
                  inputRef={codeButtonRef}
                  type="number"
                  // value={name}
                  onChange={(e) => console.log(e.target.value)}
                  placeholder="Код из СМС"
              />
            </Collapse>
            <Button
                variant='contained'
                disabled={!matchIsValidTel(phone)}
                onClick={handleButtonSubmit}
            >
                {"Отправить код"}
            </Button>
        </Box>
    )
}

export {FormEvent}
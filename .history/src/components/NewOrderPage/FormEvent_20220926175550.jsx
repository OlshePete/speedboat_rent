import { Box, Button, Collapse, TextField } from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { useEffect, useRef, useState } from "react";

const FormEvent = ({ handleClickSubmit }) => {
  const codeButtonRef = useRef(null);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [info, setInfo] = useState(null);
  const [check, setCheck] = useState(false);
  const [code, setCode] = useState("");
  useEffect(() => {
    if (check && codeButtonRef.current) {
      codeButtonRef.current.focus();
    }
  }, [check, codeButtonRef]);

  const handleChangePhone = (newValue, info) => {
    setInfo(info);
    if (info.nationalNumber.length <= 10) {
      setPhone(newValue);
    } else {
      setPhone(String(newValue).substring(0, newValue.length - 1));
    }
  };
  async function getAllCustomers() {
    const response = await fetch(`data/all`);
    const res = await response.json();
    return res;
  }
  async function getOneCustomer() {
    const response = await fetch(`data/one/${info.numberValue}`);
    const res = await response.json();
    return res;
  }
  async function newCustomer(body) {
   const response = await fetch(`data/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
    const res = await response.json();
    console.log("Customer alreadyregistered. user_id: ",res);
    return res;
  }
  const handleButtonSubmit = () => {
    setCheck(!check);
    console.log(`Отправили смс на номер ${phone}, код: 1234`);
    //  handleClickSubmit(phone, name, info)
  };
  const testOnClick = async () => {
    const tryFind = await getOneCustomer();
    if (tryFind && tryFind.length>0) {
      console.log("Customer already registered. user_id: ",tryFind[0].user_id);
    } else {
      const newId = await newCustomer({
        "user_name": name || "не указано",
        "user_phone": info.numberValue,
        "order_id": 0
      })
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Button variant="contained" size="small" onClick={testOnClick}>
        fetch
      </Button>
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
      <Collapse in={check} timeout="auto" unmountOnExit>
        <TextField
          inputRef={codeButtonRef}
          type="number"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Код из СМС"
        />
        <Button
          variant="contained"
          disabled={code !== "1234"}
          onClick={() => handleClickSubmit(phone, name, info)}
        >
          Отправить заказ
        </Button>
      </Collapse>
      <Collapse in={!check} timeout="auto" unmountOnExit>
        <Button
          variant="contained"
          disabled={!matchIsValidTel(phone)}
          onClick={handleButtonSubmit}
        >
          Отправить код
        </Button>
      </Collapse>
    </Box>
  );
};

export { FormEvent };

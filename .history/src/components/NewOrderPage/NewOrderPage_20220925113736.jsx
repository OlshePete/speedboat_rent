import { Box, Button, Paper, Typography, StepContent, Stepper, StepLabel,Step, Divider  } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCurrentCustomer } from '../../reducers/appReducer';
import {FormEvent} from './FormEvent';
import FormRoute from './FormRoute';



function NewOrderPage() {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleClickSubmit = (phone, name) => {
    dispatch(setCurrentCustomer({"phone":phone, "name":name}))
    handleNext()
  }
  const steps = [
  {
    label: 'Маршрут',
    description: <FormRoute nextStep={handleNext}/>,
  },
  {
    label: 'Клиент',
    description:
      <FormEvent handleClickSubmit={handleClickSubmit} title="Отправить код"/>,
  }
];
  return (
     <Box sx={{ 
        p:1
      }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 1 ? (
                  <Typography variant="caption">подтверждение заказа</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  {/* <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button> */}
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography variant="h6">Заказ № 001-2022</Typography>
          <Typography variant="subtitle2">успешно создан</Typography>
          <Divider/>
          <Typography variant="body1"><b>Дата:</b> 20.09.2022</Typography>
          <Typography variant="body1"><b>Время:</b> 15.00</Typography>
          <Typography variant="body1"><b>Маршрут:</b> Валаам</Typography>
          <Typography variant="body1"><b>Катер:</b> Шторм</Typography>
          <Typography variant="body1"><b>Кол-во:</b> 3 человека</Typography>
          <Typography variant="body1"><b>Клиент:</b> Мария, <a href="">+7(911)017-3722</a></Typography>


          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  )
}

export default NewOrderPage
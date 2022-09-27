import { Box, Button, Paper, Typography, StepContent, Stepper, StepLabel,Step, Divider  } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ROUTE_OPTIONS, TIMESPOTS_OPTIONS } from '../../data/routedata';
import { setCurrentCustomer } from '../../reducers/appReducer';
import {FormEvent} from './FormEvent';
import FormRoute from './FormRoute';



function NewOrderPage() {
  const dispatch = useDispatch();
  const {currentCustomer, currentOrder} = useSelector((state)=>state.speedboat)
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
  const handleClickSubmit = (phone, name, info) => {
    dispatch(setCurrentCustomer({"phone":phone, "name":name, "info":info}))
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
          <Typography variant="h6" color="red">Заказ № 001-2022</Typography>
          <Typography variant="subtitle2">успешно создан</Typography>
          <Divider/>
          <Typography variant="body1"><b>Дата:</b> {currentOrder.date}</Typography>
          <Typography variant="body1"><b>Время:</b> {TIMESPOTS_OPTIONS.find(timespot => timespot.value === currentOrder.timespot).label}</Typography>
          <Typography variant="body1"><b>Маршрут:</b>  {ROUTE_OPTIONS.find(route => route.value === currentOrder.route).label}</Typography>
          <Typography variant="body1" color="red"><b>Катер:</b> Шторм</Typography>
          <Typography variant="body1"><b>Кол-во:</b> {currentOrder.spots} человека</Typography>
          <Typography variant="body1"><b>Клиент:</b> {currentCustomer.name}, <a href="">{currentCustomer.phone}</a></Typography>


          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  )
}

export default NewOrderPage
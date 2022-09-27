import {
  Box,
  Button,
  Paper,
  Typography,
  StepContent,
  Stepper,
  StepLabel,
  Step,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTE_OPTIONS, TIMESPOTS_OPTIONS } from "../../data/routedata";
import { setCurrentCustomer } from "../../reducers/appReducer";
import { FormEvent } from "./FormEvent";
import FormRoute from "./FormRoute";
import ResultBlock from "./ResultBlock";

function NewOrderPage() {
  const dispatch = useDispatch();
  const { currentCustomer, currentOrder } = useSelector(
    (state) => state.speedboat
  );
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
    dispatch(setCurrentCustomer({ phone: phone, name: name, info: info }));
    handleNext();
  };
  const steps = [
    {
      label: "Маршрут",
      description: <FormRoute nextStep={handleNext} />,
    },
    {
      label: "Клиент",
      description: (
        <FormEvent
          handleClickSubmit={handleClickSubmit}
        />
      ),
    },
  ];
  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 1 ? (
                  <Typography variant="caption">
                    подтверждение заказа
                  </Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
              {step.description}
                <div>
                  {/* <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button> */}
                  {index !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  )}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <ResultBlock
          currentCustomer={currentCustomer}
          currentOrder={currentOrder}
          handleReset={handleReset}
        />
      )}
    </Box>
  );
}

export default NewOrderPage;

import {
  Box,
  Button,
  Typography,
  StepContent,
  Stepper,
  StepLabel,
  Step,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCustomer } from "../../reducers/appReducer";
import { FormEvent } from "./FormEvent";
import FormRoute from "./FormRoute";
import ResultBlock from "./ResultBlock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import MainButton from "../Buttons/MainButton";

function NewOrderPage() {
  const navigate = useNavigate();
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
      label: "Маршрут:",
      description: <FormRoute nextStep={handleNext} />,
    },
    {
      label: "Клиент",
      description: <FormEvent handleClickSubmit={handleClickSubmit} />,
    },
  ];
  return (
    <Container maxWidth="sm" sx={{ position: "relative", mt: 2 }}>
      <MainButton
        title="Вернуться на страницу агента"
        onClick={() => navigate(-1)}
      />
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 1 ? (
                  <Typography variant="caption">
                    Подтверждение заказа:
                  </Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                {step.description}
                <Box sx={{ mt: 2 }}>
                  {index !== 0 && (
                    <MainButton
                      title="Изменить заказ"
                      onClick={handleBack}
                      bg="#E83100"
                      hoverbg="#FF6933"
                    />
                  )}
                </Box>
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
    </Container>
  );
}

export default NewOrderPage;

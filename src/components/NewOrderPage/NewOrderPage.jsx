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
    <Container maxWidth="sm" sx={{ position: "relative", mt: 1 }}>
      <Button
        sx={{
          minHeight: "40px",
          width: "100%",
          borderRadius: "8px",
          bgcolor: "#f9ce14",
          ":hover": { bgcolor: "lightblue" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: 1,
        }}
        onClick={() => navigate(-1)}
      >
        <Typography fontWeight="600">Вернуться на страницу агента</Typography>
      </Button>
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
                <div>
                  {index !== 0 && (
                    <Button
                      fullWidth
                      onClick={handleBack}
                      sx={{ mt: 1 }}
                      variant="contained"
                      color="error"
                    >
                      Изменить заказ
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
    </Container>
  );
}

export default NewOrderPage;

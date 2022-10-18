import {
  Box,
  Typography,
  StepContent,
  Stepper,
  StepLabel,
  Step,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCustomer, updateAddedList } from "../../reducers/appReducer";
import { FormEvent } from "./FormEvent";
import FormRoute from "./FormRoute";
import ResultBlock from "./ResultBlock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import MainButton from "../Buttons/MainButton";
import { now } from "moment-timezone";

function NewOrderPage() {
  const now = new Date();
  const dateOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const DateNow = new Intl.DateTimeFormat("ru", dateOptions);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCustomer, currentOrder, userRole,id } = useSelector(
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
  
  async function newOrder(body) {
    const response = await fetch(`/data/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const res = await response.json();
    return res;
  }
  const getRouteId = (route_name) =>{
    switch (route_name) {
      case "Multi":
        return 3
      case "Shkhery":
        return 2
      case "Valaam":
        return 1
      default:
        break;
    }
  }
  const getTimeSpot = (timespot) =>{
    switch (timespot) {
      case 1:
        return "09:00:00"
      case 2:
        return "12:00:00"
      case 3:
        return "15:00:00"
      case 4:
        return "18:00:00"
      default:
        break;
    }
  }
  const handleClickSubmit = async (user_id) => {
    const body = {
      "order_date": now.toISOString().split('T')[0],
      "order_event_date": currentOrder.date+" "+getTimeSpot(currentOrder.timespot),
      "route_id": getRouteId(currentOrder.route),
      "user_id": user_id,
      "total_persons": currentOrder.spots,
      "agent_id": id,
      "is_paid": false,
      "is_exec": false
    }
    await dispatch(updateAddedList(newOrder(body)))
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
      {
        userRole !== "admin" && <MainButton title="Назад" onClick={() => navigate(-1)} />
      }
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

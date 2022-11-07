import { Container } from "@mui/material";
import React, { useState } from "react";
import { infoData } from "../../data/infoData";
import InfoItem from "./InfoItem";

function InfoPage() {
  const [information] = useState(infoData);
  return (
    <Container maxWidth="sm">
      {information &&
        information.map((el, i) => (
          <InfoItem key={i} title={el.title} date={el.date} text={el.text} />
        ))}
    </Container>
  );
}

export default InfoPage;

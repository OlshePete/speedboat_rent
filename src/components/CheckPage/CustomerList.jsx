import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

export default function CustomerList(props) {
  return (
    <Box sx={{ width: "100%" }}>
      {props.customers &&
        props.customers.map((el, i) => (
          <Accordion sx={{ m: 1 }} key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Номер: {el.phone} | Имя: {el.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Дата: {el.date}</Typography>
              <Typography>Маршрут: {el.route}</Typography>
              <br />
              <Typography>Комментарий: {el.desc}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </Box>
  );
}

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CustomExpandIcon = () => {
  return (
    <div>
      <div className="expandMoreIcon">
        <AddIcon />
      </div>
      <div className="removeExpandIcon">
        <RemoveIcon />
      </div>
    </div>
  );
};
const CustomAccordion = ({ title, description }) => {
  return (
    <Accordion
      sx={{
        p: 2,
        "& .removeExpandIcon": {
          display: "none",
        },
        "& .Mui-expanded": {
          "& .expandMoreIcon": {
            display: "none",
          },
          "& .removeExpandIcon": {
            display: "block",
            "& svg": {
              color: "primary.green",
            },
          },
        },
      }}
    >
      <AccordionSummary
        expandIcon={<CustomExpandIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          "& p": {
            fontWeight: "bold",
          },
          "& .Mui-expanded": {
            "& p": {
              color: "primary.green",
            },
          },
        }}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;

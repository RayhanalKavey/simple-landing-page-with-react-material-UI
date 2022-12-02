import { Box } from "@mui/material";
import React from "react";
import CustomAccordion from "../../../components/Accordion/CustomAccordion";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <Box>
      <SectionTitle
        title="Frequently Asked Questions"
        colored="FAQ"
      ></SectionTitle>
      <Box>
        <CustomAccordion></CustomAccordion>
      </Box>
    </Box>
  );
};

export default Faq;

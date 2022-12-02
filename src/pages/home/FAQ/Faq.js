import { Box } from "@mui/material";
import React from "react";
import CustomAccordion from "../../../components/Accordion/CustomAccordion";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <Box sx={{ mb: "6.5rem" }}>
      <SectionTitle
        title="Frequently Asked Questions"
        colored="FAQ"
      ></SectionTitle>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, pt: 0 }}>
        <CustomAccordion
          title="How to learn web development in an effective way?"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut minima nihil inventore hic. Vero deleniti alias natus expedita autem!"
        ></CustomAccordion>
        <CustomAccordion
          title="How to learn web development in an effective way?"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut minima nihil inventore hic. Vero deleniti alias natus expedita autem!"
        ></CustomAccordion>
        <CustomAccordion
          title="How to learn web development in an effective way?"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut minima nihil inventore hic. Vero deleniti alias natus expedita autem!"
        ></CustomAccordion>
      </Box>
    </Box>
  );
};

export default Faq;

import { Box, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Service from "./Service";

const servicesImages = [
  "https://i.ibb.co/HNhykGp/iphone-1.png",
  "https://i.ibb.co/r0gHkvM/color-palette-1.png",
  "https://i.ibb.co/CvQwzKC/coding-1.png",
];

const Services = () => {
  return (
    <Box sx={{ mb: "4rem" }}>
      <SectionTitle title="Provide Services" colored="services"></SectionTitle>
      <Grid container spacing={3}>
        {servicesImages.map((img, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Service image={img} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;

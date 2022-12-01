import { Box, styled } from "@mui/material";
import { display } from "@mui/system";
import React from "react";

const brands = [
  "https://i.ibb.co/27wHw8Y/image-5.png",
  "https://i.ibb.co/vVSVd76/image-6.png",
  "https://i.ibb.co/Dwj3KYc/image-7.png",
  "https://i.ibb.co/99gcp3b/image-8.png",
  "https://i.ibb.co/Rhk2VSh/image-9.png",
];
const BrandWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "4rem",
  alignItems: "center",
  "& > img": {
    height: "40px",
  },
  // "@media(max-width:600px)": {},
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    "&>img": {
      marginBottom: "1rem",
    },
  },
}));

const Brands = () => {
  return (
    <BrandWrapper>
      {brands.map((brand, i) => (
        <img key={i} src={brand} alt="" />
      ))}
    </BrandWrapper>
  );
};

export default Brands;

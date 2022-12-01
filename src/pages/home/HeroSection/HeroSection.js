import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: "70vh",
    backgroundColor: "rgba(122,178,89,0.15)",
    padding: theme.spacing(4),
    clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
    display: "flex",
    justifyContent: "space-between",
  }));
  return (
    <BrandingWrapper>
      <Stack spacing={3} width="50%">
        <Typography
          sx={{ fontSize: "2.5rem", fontWeight: "bold", lineHeight: "1.2" }}
        >
          Let's grow your brand to the next level
        </Typography>
        <Typography>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          recusandae. Corrupti sapiente modi accusantium, atque illo qui porro
          fuga quam.{" "}
        </Typography>
        <Button style={{ width: "50%" }}>Hire Us</Button>
      </Stack>
      <Box sx={{ width: "50%" }}>
        <img
          src="https://i.ibb.co/sPXVMbC/Frame.png"
          alt=""
          style={{ width: "100%" }}
        />
      </Box>
    </BrandingWrapper>
  );
};

export default HeroSection;

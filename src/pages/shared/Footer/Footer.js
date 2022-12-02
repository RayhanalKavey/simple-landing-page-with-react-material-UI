import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", py: "6rem" }}>
      <Container sx={{}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem", color: "#fff" }}>
            Digital Agency
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}
            >
              Digital Agency
            </Typography>
            <Button
              sx={{
                backgroundColor: "primary.green",
                "&:hover": {
                  backgroundColor: "primary.green",
                },
                ml: 2,
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
        <Divider sx={{ mt: 3, bgcolor: "rgba(255,255,255,0.4)" }}></Divider>
      </Container>
    </Box>
  );
};

export default Footer;

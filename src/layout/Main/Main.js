import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import Header from "../../pages/shared/Header/Header";

const Main = () => {
  return (
    <Box>
      <Container>
        <Header></Header>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Main;

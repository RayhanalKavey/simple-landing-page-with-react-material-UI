import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../pages/shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <Outlet></Outlet>
        <div style={{ marginTop: "40px" }}>Footer</div>
      </Container>
    </div>
  );
};

export default Main;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import StyledNavbar from "./StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
};

export default SharedLayout;

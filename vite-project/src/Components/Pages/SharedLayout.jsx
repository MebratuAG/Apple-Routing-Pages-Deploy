import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.JSX";
import Header from "./Header.jsx";

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default SharedLayout;

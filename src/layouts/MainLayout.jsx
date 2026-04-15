import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children ? children : <Outlet />}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;

import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="min-h-[51vh] bg-[#F8FAFC]">{children ? children : <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

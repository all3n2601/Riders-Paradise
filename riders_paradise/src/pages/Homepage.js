import React from "react";
import UserHeader from "../components/user/UserHeader";
import Home from "../components/user/Home";
import Footer from "../components/page/footer";
import { userRole } from "../components/auth/auth";
import Forbidden from "../components/auth/Forbidden";

const HomePage = () => {
  console.log("User Role:", userRole);
  return userRole === "user" || "admin" ? (
    <div>
      <UserHeader />
      <Home />
      <Footer />
    </div>
  ) : (
    <>
      <Forbidden />
    </>
  );
};

export default HomePage;

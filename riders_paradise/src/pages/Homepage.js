import React from "react";
import UserHeader from "../components/user/UserHeader";
import Home from "../components/user/Home";
import Footer from "../components/page/footer";
import { userRole } from "../components/auth/auth";

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
      <h1>You are Not Authorized</h1>
    </>
  );
};

export default HomePage;

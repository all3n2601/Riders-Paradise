import React, { useState } from "react";
import Sidebar from "../admin/AdminSidebar";
import Dashboard from "../admin/AdminDashboard";
import AddBike from "../admin/AddBike";
import AdminHeader from "../admin/AdminHeader";
import { userRole } from "../auth/auth";
import Forbidden from "../auth/Forbidden";

const Admin = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return userRole === "admin" ? (
    <div style={{ display: "flex" }}>
      <AdminHeader />

      <Sidebar onSelectItem={handleSelectItem} />

      <div
        style={{
          backgroundColor: "rgb(54, 48, 98)",
          marginTop: "64px",
          padding: "16px",
          flex: "1",
          overflowY: "scroll",
        }}
      >
        {selectedItem === "dashboard" && <Dashboard />}
        {selectedItem === "addbike" && <AddBike />}
        {selectedItem === "settings" && <h1>Settings Page</h1>}
      </div>
    </div>
  ) : (
    <Forbidden />
  );
};

export default Admin;

import React, { useState } from "react";
import Header from "../admin/AdminHeader";
import Sidebar from "../admin/AdminSidebar";
import Dashboard from "../admin/AdminDashboard";

const Layout = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ display: "flex" }}>
      <Header />

      <Sidebar onSelectItem={handleSelectItem} />

      <div
        style={{
          backgroundColor: "rgb(54, 48, 98)",
          marginTop: "64px",
          padding: "16px",
          flex: "1",
        }}
      >
        {selectedItem === "dashboard" && <Dashboard />}
        {selectedItem === "addbike" && <h1>Add Bike</h1>}
        {selectedItem === "settings" && <h1>Settings Page</h1>}
      </div>
    </div>
  );
};

export default Layout;

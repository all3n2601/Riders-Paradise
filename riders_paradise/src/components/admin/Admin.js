import React, { useState } from "react";
import Sidebar from "../admin/AdminSidebar";
import Dashboard from "../admin/AdminDashboard";
import AddBike from "../admin/AddBike";
import AdminHeader from "../admin/AdminHeader";
import EditBikeForm from "../admin/EditBike";

const Admin = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminHeader />

      <Sidebar onSelectItem={handleSelectItem} />

      <div
        style={{
          backgroundColor: "rgb(40, 42, 58)",
          marginTop: "64px",
          padding: "16px",
          flex: "1",
        }}
      >
        {selectedItem === "dashboard" && <Dashboard />}
        {selectedItem === "settings" && <h1>Settings Page</h1>}
        {selectedItem === "addbike" && <AddBike />}
        {selectedItem === "editbike" && <EditBikeForm />}
        {selectedItem === "orders" && <h1>Order Page</h1>}
      </div>
    </div>
  );
};

export default Admin;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { setCurrentUser, setUserRole } from "../auth/auth";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const handlelogOut = () => {
    setCurrentUser(null);
    setUserRole(null);
    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      style={{ width: "100%", backgroundColor: "rgb(129, 143, 180)" }}
    >
      <Toolbar style={{ backgroundColor: "rgb(129, 143, 180)" }}>
        <Typography variant="h6">ADMIN OVERVIEW</Typography>
        <div style={{ marginLeft: "auto" }}>
          <Button
            style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "14px",
            }}
            onClick={handlelogOut}
          >
            LogOut
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;

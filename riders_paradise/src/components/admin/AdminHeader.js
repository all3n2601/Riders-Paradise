import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      style={{ width: "100%", backgroundColor: "rgb(129, 143, 180)" }}
    >
      <Toolbar style={{ backgroundColor: "rgb(129, 143, 180)" }}>
        <Typography variant="h6">ADMIN OVERVIEW</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

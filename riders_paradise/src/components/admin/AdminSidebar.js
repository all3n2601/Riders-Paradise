import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import TwoWheeler from "@mui/icons-material/TwoWheeler";

const Sidebar = ({ onSelectItem, defaultSelectedItem }) => {
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onSelectItem(item);
  };

  return (
    <Box
      component="nav"
      sx={{
        width: "240px",
        backgroundColor: "rgb(67, 85, 133)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <List>
        <ListItem disablePadding>
          <Button
            component="div"
            style={{
              marginBottom: "10px",
              color: "white",
              padding: "10px",
            }}
            onClick={() => handleItemClick("dashboard")}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            component="div"
            style={{
              marginBottom: "10px",
              color: "white",
              padding: "10px",
            }}
            onClick={() => handleItemClick("settings")}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            component="div"
            style={{
              marginBottom: "10px",
              color: "white",
              padding: "10px",
            }}
            onClick={() => handleItemClick("addbike")}
          >
            <ListItemIcon>
              <TwoWheeler />
            </ListItemIcon>
            <ListItemText primary="Add Bike" />
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

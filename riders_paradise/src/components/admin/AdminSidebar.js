import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Phone from "@mui/icons-material/Phone";
import TwoWheeler from "@mui/icons-material/TwoWheeler";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

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
        backgroundColor: "rgb(35, 45, 63)",
        height: "120vh",
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
              marginBottom: "20px",
              color: "white",
              padding: "10px",
            }}
            onClick={() => handleItemClick("dashboard")}
          >
            <ListItemIcon>
              <DashboardIcon style={{ fill: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            component="div"
            style={{
              marginBottom: "20px",
              color: "white",
              padding: "10px",
            }}
            onClick={() => handleItemClick("addbike")}
          >
            <ListItemIcon>
              <TwoWheeler style={{ fill: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Add Bike" />
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            component="div"
            style={{
              marginBottom: "20px",
              color: "white",
              padding: "10px",
            }}
            onClick={() => handleItemClick("editbike")}
          >
            <ListItemIcon>
              <TwoWheeler style={{ fill: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Edit Bike" />
          </Button>
        </ListItem>

        <ListItem disablePadding>
          <Button
            component="div"
            style={{
              marginBottom: "20px",
              color: "white",
              padding: "10px",
            }}
            onClick={() => handleItemClick("orders")}
          >
            <ListItemIcon>
              <ShoppingCart style={{ fill: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </Button>
        </ListItem>

        <ListItem disablePadding>
          <Button
            component="div"
            style={{
              marginBottom: "150px",
              color: "white",
              padding: "10px",
            }}
            onClick={() => handleItemClick("contacts")}
          >
            <ListItemIcon>
              <Phone style={{ fill: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

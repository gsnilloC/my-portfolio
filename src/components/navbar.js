import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"; // Import a menu icon from MUI
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <nav>
      <div className="menu-icon" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </div>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          {['Home', 'About', 'Skills', 'Contact'].map((text, index) => (
            <ListItem button key={text} onClick={toggleDrawer(false)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </nav>
  );
}

export default Navbar;

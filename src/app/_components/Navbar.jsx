"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@emotion/react";
import { AcmeLogo } from "./AcmeLogo";

export default function ButtonAppBar({ links }) {
  const [open, setOpen] = React.useState();
  function toggleMenu(e) {
    setOpen(e);
    console.log(e);
  }
  const theme = useTheme();

  const DrawerList = (
    <Box
      className="w-fll"
      sx={{
        width: 250,
        color: "white",
        bgcolor: theme.colors.secondary,
        height: "100%",
      }}
      color="min"
      onClick={() => toggleDrawer(false)}
    >
      <List className="links-doer">
        {links.map((text) => (
          <ListItem key={text.name_en} disablePadding>
            <ListItemButton className="hover-custom">
              <Link className="link-nav-min" href={text.name_en}>
                {text.icon} {text.name_ar}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box>
      <AppBar
        position="static"
        color="inherit"
        sx={{ flexGrow: 1, bgcolor: theme.colors.secondary, color: "white" }}
      >
        <Toolbar className="container-min ">
          <IconButton
            onClick={() => toggleMenu(true)}
            size="large"
            className="icon-nav-toggle "
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer open={open} onClose={() => toggleMenu(false)}>
            {DrawerList}
          </Drawer>

          <Box className="links-nav-min">
            {links.map((text, index) => (
              <Link
                className="link-nav-min"
                key={index}
                variant="h6"
                href={`${text.name_en}`}
              >
                {text.name_ar}
              </Link>
            ))}
          </Box>

          <Button color="inherit">
            <AcmeLogo />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

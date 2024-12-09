"use client";
import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  Drawer,
  Avatar,
} from "@mui/material";
import { AcmeLogo } from "./AcmeLogo";
import { usePathname } from "next/navigation";
import ListUser from "./listUser";

export default function ButtonAppBar({ links, show }) {
  const [open, setOpen] = useState(false);
  const loc = usePathname().replace("/", "");

  const toggleMenu = (state) => {
    setOpen(state);
  };

  const DrawerList = (
    <Box
      className="w-full bg-seconder h-full"
      sx={{
        width: 250,
        height: "100%",
      }}
      onClick={() => toggleMenu(false)}
    >
      <List className="links-doer">
        {links.map((link) => (
          <ListItem key={link.name_en} disablePadding>
            <ListItemButton className="hover-custom">
              <Link href={`/${link.name_en}`} className="link-nav-min">
                {link.icon} {link.name_ar}
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
      <AppBar className="bg-secondary" position="static" color="inherit">
        <Toolbar className="container-min flex justify-between">
          <IconButton
            onClick={() => toggleMenu(true)}
            size="large"
            className="md:hidden text-white"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer: Slides in from the left */}
          <Drawer open={open} onClose={() => toggleMenu(false)}>
            {DrawerList}
          </Drawer>

          <Box className="hidden md:flex space-x-4 flex-grow">
            {links.map((link) => (
              <Link
                key={link.name_en}
                href={`/${link.name_en}`}
                className={`link-nav-min py-1 px-2 rounded-md transition-colors duration-300 ${
                  link.name_en === loc ? "bg-min hover:bg-seconder" : ""
                }`}
              >
                {link.name_ar}
              </Link>
            ))}
          </Box>
          {show && (
            <Button>
              <ListUser />
            </Button>
          )}
          <Drawer open={open} onClick={() => toggleMenu()}>
            {DrawerList}
          </Drawer>
          {/* Logo: Always visible */}
          <Button color="inherit">
            <AcmeLogo />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

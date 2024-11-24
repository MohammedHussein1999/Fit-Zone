"use client";
import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider, List, ListItem, ListItemButton, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles"; 
import { AcmeLogo } from "./AcmeLogo";

export default function ButtonAppBar({ links }) {
  const [open, setOpen] = useState(false); 
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"), {
    noSsr: true,
  });
  console.log(isSmallScreen);

  function toggleMenu(state) {
    setOpen(state);
    console.log(state);
  }

  const DrawerList = (
    <Box
      className="w-full"
      sx={{
        width: 250,
        color: "red",
        bgcolor: theme.palette.main.primary,
        height: "100%",
      }}
      onClick={() => toggleMenu(false)}
    >
      <List className="links-doer">
        {links.map((link) => (
          <ListItem key={link.name_en} disablePadding>
            <ListItemButton className="hover-custom">
              <Link href={link.name_en} className="link-nav-min">
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
      <AppBar
        position="static"
        color="inherit"
        sx={{
          flexGrow: 1,
          bgcolor: theme.palette.main.primary,
          color: "white",
        }}
      >
        <Toolbar className="container-min">
          <IconButton
            onClick={() => toggleMenu(true)}
            size="large"
            className="icon-nav-toggle"
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

          {/* Conditionally render links based on screen size */}
          {!isSmallScreen && (
            <Box className="links-nav-min flex-grow">
              {links.map((link, index) => (
                <Link
                  className={`link-nav-min ${
                    index === 1 ? "login font-bold" : "font-medium"
                  }`}
                  key={link.name_en}
                  href={`${link.name_en}`}
                >
                  {link.name_ar}
                </Link>
              ))}
            </Box>
          )}

          {/* Logo aligned to the right */}
          <Button color="inherit">
            <AcmeLogo />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

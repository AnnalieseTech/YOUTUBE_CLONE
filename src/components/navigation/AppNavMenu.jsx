import { AiFillYoutube } from "react-icons/ai";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  appBar,
  toolbarWrapper,
  flexAlignCenter,
  logoText,
  hideOnMobile,
} from "@styles/styles";
import SearchBar from "./SearchBar";
import UserProfile from "../UserProfile";
import NotificationsList from "../NotificationsList";
import Upload from "../Upload";

const AppNavMenu = (props) => {
  return (
    <AppBar component="nav" sx={appBar}>
      <Toolbar>
        <Box sx={toolbarWrapper}>
          <Box sx={flexAlignCenter}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <AiFillYoutube size={32} />
            <Typography variant="h6" component="div" sx={logoText}>
              YouTube
            </Typography>
          </Box>
          <Box sx={hideOnMobile}>
            <SearchBar />
          </Box>
          <Box sx={hideOnMobile}>
            <Upload />
            <NotificationsList />
            <UserProfile />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavMenu;

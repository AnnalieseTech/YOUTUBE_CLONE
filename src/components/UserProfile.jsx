import { FaUserCircle } from "react-icons/fa";
import { userProfileItems } from "@data/app.data";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import React from "react";
import Typography from "@mui/material/Typography";
import { inlineText } from "@styles/styles";
import useToggle from "@hooks/useToggle";

const UserProfile = () => {
  const { el, open, handleClick, handleClose } = useToggle();
  return (
    <Box sx={{ px: 1 }}>
      <Button id="basic-button" onClick={handleClick}>
        <FaUserCircle size={24} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={el}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <ListItem sx={{ pt: 0, pb: 1 }} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Channel avatar" src="/static/img/avatar.png" />
          </ListItemAvatar>
          <ListItemText
            primary="ReactJS Dev"
            secondary={
              <React.Fragment>
                <Typography sx={inlineText} component="span">
                  <Link href="#" underline="none">
                    Manage Your Google Account
                  </Link>
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Box sx={{ minWidth: 300, borderTop: "1px solid #ddd" }}>
          {userProfileItems.map((item) => {
            return (
              <List sx={{ p: 0 }} key={item.id}>
                {item.divider ? (
                  <Divider />
                ) : (
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                )}
              </List>
            );
          })}
        </Box>
      </Menu>
    </Box>
  );
};

export default UserProfile;

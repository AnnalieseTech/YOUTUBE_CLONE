import { BsBellFill } from "react-icons/bs";
import { notificationData } from "@data/app.data";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import React from "react";
import Typography from "@mui/material/Typography";
import useToggle from "@hooks/useToggle";
import { notificationWrapper, inlineText } from "@styles/styles";

const NotificationsList = () => {
  const { el, open, handleClick, handleClose } = useToggle();
  return (
    <Box sx={{ px: 1 }}>
      <Button id="basic-button" onClick={handleClick}>
        <BsBellFill size={24} />
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
        <List sx={notificationWrapper}>
          {notificationData.map((item) => {
            return (
              <Link href={item.url} key={item.id} underline="none">
                <ListItem sx={{ pt: 0, pb: 1, mt: 1 }} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={item.alt} src={item.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.text}
                    secondary={
                      <React.Fragment>
                        <Box component="span" sx={{ mt: 2 }}>
                          <Typography sx={inlineText} component="span">
                            {item.time}
                          </Typography>
                        </Box>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {notificationData.length !== item.id && (
                  <Divider variant="inset" component="li" />
                )}
              </Link>
            );
          })}
        </List>
      </Menu>
    </Box>
  );
};

export default NotificationsList;

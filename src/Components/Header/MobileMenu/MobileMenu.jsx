import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import cn from "classnames";
import style from "../header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import UserButton from "../UserButton";

const MobileMenu = () => {
  const { user } = useSelector((state) => state.User);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [state, setState] = useState({
    menu: false,
  });

  const anchor = "menu";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    
    >
      <List>
        <ListItem>
          <UserButton/>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>Lịch Chiếu</ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>Cụm Rạp</ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>Tin Tức</ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>Ứng Dụng</ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box className={cn(style.navMenuMobile)}  >
      <Button onClick={toggleDrawer(anchor, true)} className={style.navMenuBtn}>
        <MenuIcon color="info" />
      </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        className={style.mobileMenu}
      >
        {list(anchor)}
      </Drawer>
    </Box>
  );
};

export default MobileMenu;

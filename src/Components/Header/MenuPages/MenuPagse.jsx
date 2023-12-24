import React from "react";
import "../../../Style/base.scss";
import style from "../header.module.scss";
import cn from "classnames";
import { Box } from "@mui/material";

const MenuPagse = () => {
  return (
    <Box className={cn(style.navMenu)} width={"63%"}>
      <nav className={style.menu}>
        <li>
          <a href="#">Lịch Chiếu</a>
        </li>
        <li>
          <a href="#">Cụm Rạp</a>
        </li>
        <li>
          <a href="#">Tin Tức</a>
        </li>
        <li>
          <a href="#">Ứng Dụng</a>
        </li>
      </nav>
    </Box>
  );
};

export default MenuPagse;

import React, { useEffect, useState } from "react";
import "../../Style/base.scss";

import Logo from "./Logo";
import MenuPages from "./MenuPages";

import style from "./header.module.scss";
import cn from "classnames";
import "../../Style/base.scss";
import UserButton from "./UserButton";
import MobileMenu from "./MobileMenu";
import { Box } from "@mui/material";
const Header = () => {
  return (
    <div className={cn(style.header)}>
      <nav className="navbar container">
        <Logo />
        <Box className={style.noneMobile} width={"72%"}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <MenuPages />
            <UserButton />
          </Box>
        </Box>
        <MobileMenu />
      </nav>
    </div>
  );
};

export default Header;

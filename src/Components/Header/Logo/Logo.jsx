import React from "react";
import { Link } from "react-router-dom";
import style from "../header.module.scss";
// import logo from "";
import { Box, CardMedia, Typography } from "@mui/material";
const Logo = () => {
  return (
    <Box className={style.logo}>
      <Link to="/">
        <img
          src='/images/the-night-cinema_logo.png'
          alt=""
          style={{
            width: "90px",
            height: "60px",
          }}
        />
      </Link>
    </Box>
  );
};

export default Logo;

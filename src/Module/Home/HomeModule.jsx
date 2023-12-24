import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Showing from "./Showing/Showing";
import QuickBooking from "./QuickBooking";
import { Box, Container } from "@mui/material";


const HomeModule = () => {
  
  return (
    <Box>
      <Banner />
      <QuickBooking />
      <Showing />
    </Box>
  );
};

export default HomeModule;

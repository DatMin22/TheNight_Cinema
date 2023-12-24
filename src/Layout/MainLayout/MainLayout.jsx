import React, { useEffect, useState } from "react";

import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import { Box } from "@mui/material";
import Lottie from "lottie-react";
import loadingAnimation from "../../constant/loadingAnimation.json";

const MainLayout = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2700);
  }, []);
  return (
    <Box>
      {loading ? (
        <Lottie loop={true} animationData={loadingAnimation} style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"669px"}}/>
      ) : (
        <Box>
          <Header />
          <Outlet />
          <Footer />
        </Box>
      )}
    </Box>
  );
};

export default MainLayout;

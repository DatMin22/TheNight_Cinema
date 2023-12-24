import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getBannersAPI } from "../../../APIs/movieAPI";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./banner.module.scss";
import "../../../Style/base.scss"
import PlayCircleFilledSharpIcon from "@mui/icons-material/PlayCircleFilledSharp";


import { Carousel } from "react-responsive-carousel";
import Trailer from "../Trailer";

const Banner = () => {
  const [openTrailer, setOpenTrailer] = useState(false);
  const [movieID, setMovieID] = useState("");
  console.log('MovieID', movieID)
  const handleOpenTrailer = (id) => {
    setOpenTrailer(!openTrailer);
    setMovieID(id)
  };
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["Banner"],
    queryFn: getBannersAPI,
  });

  return (
    <div className={style.banner}>
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
        {data.map((item) => {
          return (
            <Box >
              <Button sx={{display:"inline-block"}} className={style.playBtn}
              onClick={() => {
                handleOpenTrailer(item.maPhim);
              }}
              >
                <PlayCircleFilledSharpIcon/>
              </Button>

              <img
                src={item.hinhAnh}
                alt=""
                height={"540px"}
                width="100%"
                style={{ objectFit: "cover" }}
                key={item.maBanner}
              />
            </Box>
          );
        })}
      </Carousel>
      {openTrailer && <Trailer movieID={movieID} setOpenTrailer={setOpenTrailer}/>}
    </div>
  );
};

export default Banner;

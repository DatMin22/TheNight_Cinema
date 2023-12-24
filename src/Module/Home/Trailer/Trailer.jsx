import React from "react";
import style from "./trailer.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetailsAPI } from "../../../APIs/movieAPI";
import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../../../Style/base.scss";
const Trailer = ({ movieID, setOpenTrailer }) => {
  console.log("movieID", movieID);
  const { data = {} } = useQuery({
    queryKey: ["MOIVE_TRAILER", movieID],
    queryFn: () => getMovieDetailsAPI(movieID),
    enabled: !!movieID,
  });
  console.log('data', data)
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        background: "rgba(0,0,0,0.3)",
        width: "100%",
        height: "100%",
      }}
    >
      <Button className={style.closeBtn} onClick={() => setOpenTrailer(false)}>
        <CloseIcon />
      </Button>
      <Box
        sx={{
          position: "absolute",
          top: "18%",
          left: "25%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <iframe width="560" height="315" src={data.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Box>
    </Box>
  );
};

export default Trailer;

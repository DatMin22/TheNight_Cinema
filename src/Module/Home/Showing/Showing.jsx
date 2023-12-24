import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { getListMovieAPI } from "../../../APIs/movieAPI";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import style from "./showing.module.scss";
import cn from "classnames";
import "../../../Style/base.scss";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PlayAnimation from "../../../Lotties/PlayAnimation.json";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ReactPaginate from "react-paginate";
import { green } from "@mui/material/colors";
import Trailer from "../Trailer";
import Lottie from "lottie-react";

const Showing = () => {
  const navigate = useNavigate();
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["list-movie"], queryFn: getListMovieAPI });
  // console.log(data)

  const [currentPage, setCurrentPage] = useState(0);
  const moviePerPage = 8;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const pageCount = Math.ceil(data.length / moviePerPage);
  const offset = currentPage * moviePerPage;
  const currentPageMovie = data.slice(offset, offset + moviePerPage);

  const [openTrailer, setOpenTrailer] = useState(false);
  const [movieID, setMovieID] = useState("");
  const handleOpenTrailer = (id) => {
    setOpenTrailer(!openTrailer);
    setMovieID(id);
  };
  return (
    <Container>
      <Box
        sx={{
          paddingTop: "90px",
          // position: "relative",
        }}
      >
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // flexWrap: "wrap",
          // gap: '1rem'
        }}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: '1rem'
          }}>
            {currentPageMovie.map((phim) => {
              return (
                <Grid item xs={6} >
                  <Card sx={{ maxWidth: "270px" }} className={style.cardItem}>
                    <Box
                      className={style.overlay}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "rgba(0,0,0,0.5)",
                      }}
                    >
                      <Button
                        onClick={() => {
                          handleOpenTrailer(phim.maPhim);
                        }}
                      >
                        <Lottie loop={true} animationData={PlayAnimation} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "669px" }} />
                        {/* <PlayCircleOutlineIcon
                          sx={{
                            width: "3rem",
                            height: "3rem",
                            borderRadius: "50%",
                            boxShadow:
                              "0 0 6px 3px #fff, 0 0 10px 6px #f0f, 0 0 14px 9px #0ff",
                            fontSize: "3rem",
                            color: "#e700ff",
                          }}
                        /> */}
                      </Button>
                    </Box>
                    <CardMedia
                      component="img"
                      alt="..."
                      style={{
                        height: 270,
                        objectFit: "fill",
                      }}
                      image={phim.hinhAnh}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="truncate"
                        sx={{ height: 69 }}
                      >
                        {phim.tenPhim}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="truncate"
                      >
                        {phim.moTa}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="large"
                        // variant="outlined"
                        fullWidth
                        id={style.detailBtn}
                        className="btn"
                        onClick={() => {
                          navigate(`movie/${phim.maPhim}`);
                        }}
                      >
                        <Link color="#fff" style={{ color: 'white' }}>Chi tiết</Link>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </div>
        </div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <>
            <ReactPaginate
              previousLabel={<ArrowLeft sx={{ fontSize: 32 }} />}
              nextLabel={<ArrowRight sx={{ fontSize: 32 }} />}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
              className={cn(style.pagination)}
              activeLinkClassName="active"
            />
          </>
        </Box>
      </Box>
      {openTrailer && (
        <Trailer movieID={movieID} setOpenTrailer={setOpenTrailer} />
      )}
    </Container>
  );
};

export default Showing;

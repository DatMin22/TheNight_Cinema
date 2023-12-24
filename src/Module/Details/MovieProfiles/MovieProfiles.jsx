import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMovieDetailsAPI } from "../../../APIs/movieAPI";
import { Box, Container, Typography } from "@mui/material";

const MovieProfiles = ({ movieID }) => {
  // console.log(movieID);
  const {
    data = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies-details", movieID],
    queryFn: () => getMovieDetailsAPI(movieID),
    enabled: !!movieID,
  });

  // console.log(data);
  return (
    <Container>
      <Box>
        <img src={data.hinhAnh} alt="..." />
      </Box>
    </Container>
  );
};

export default MovieProfiles;

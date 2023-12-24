import React from "react";
import MovieProfiles from "./MovieProfiles";
import ShowTimes from "./ShowTimes";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";

const Details = () => {
  const { movieID } = useParams();
  return (
    <Container sx={{
      paddingTop:12,
      display:"flex",
      justifyContent:'center',
      // flexDirection:"column"
      height:'100vh'

    }}>
      <MovieProfiles movieID={movieID}/>
      <ShowTimes movieID={movieID}/>
    </Container>
  );
};

export default Details;

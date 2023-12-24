import { Autocomplete, Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const ChonPhim = ({ ListMovie, setPickedPhim }) => {
  const [phim, setPhim] = useState("");
  const idPhim = phim?.maPhim;
  setPickedPhim(idPhim);
  const defMovie = {
    options: ListMovie,
    getOptionLabel: (option) => option.tenPhim,
  };

  return (
    <Box width={"24%"} >
      <Autocomplete
        {...defMovie}
        renderInput={(params) => (
          <TextField {...params} label="Chọn Phim" variant="standard" />
        )}
        onChange={(event, value) => setPhim(value)}
      />
    </Box>
  );
};

export default ChonPhim;

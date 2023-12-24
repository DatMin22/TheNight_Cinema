import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";

const ChonRap = ({ cumRap, setRap }) => {
  const danhSachRap = [];
  const DanhSanhCumRap = cumRap?.map((item) =>
    item.map((item) => danhSachRap.push(item))
  );

  const defRap = {
    options: danhSachRap,
    getOptionLabel: (option) => option.tenCumRap || "",
  };
  return (
    <Box width={"24%"}>
      <Autocomplete
        {...defRap}
        renderInput={(params) => (
          <TextField {...params} label="Chọn Rap Chiếu" variant="standard" />
        )}
        onChange={(event, value) => setRap(value)}
      />
    </Box>
  );
};

export default ChonRap;

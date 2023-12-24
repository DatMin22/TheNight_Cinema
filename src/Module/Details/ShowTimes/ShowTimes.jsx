import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getMovieShowTimesAPIs } from "../../../APIs/cinemaAPIs";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Container,
  Stack,
  Button,
} from "@mui/material";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ShowTimes = ({ movieID }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const {
    data: movieShowTimes = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["showtimes", movieID],
    queryFn: () => getMovieShowTimesAPIs(movieID),
    enabled: !!movieID,
  });

  const cinemaSystem = movieShowTimes.heThongRapChieu || [];
  // console.log(cinemaSystem);
  useEffect(() => {
    if (cinemaSystem.length > 0) {
      setValue(cinemaSystem[0].maHeThongRap);
    }
  }, [cinemaSystem]);
  return (
    <Container>
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          sx={{ borderRight: 1, borderColor: "divider" }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {cinemaSystem.map((rap) => {
            return (
              <Tab
                label={<img src={rap.logo} alt="..." style={{ width: 80 }} />}
                key={rap.maHeThongRap}
                value={rap.maHeThongRap}
                {...a11yProps(rap.maHeThongRap)}
              ></Tab>
            );
          })}
          ;
        </Tabs>
        {cinemaSystem.map((cumRap) => {
          return (
            <TabPanel
              value={value}
              index={cumRap.maHeThongRap}
              key={cumRap.maHeThongRap}
            >
              {cumRap.cumRapChieu.map((rap) => {
                return (
                  <Box sx={{ marginBottom: 6 }} key={rap.maCumRap}>
                    <Typography variant={"h5"} sx={{ marginBottom: 1 }}>
                      {rap.tenCumRap}
                    </Typography>
                    <Stack spacing={2} direction={"row"}>
                      {rap.lichChieuPhim.map((suat) => {
                        console.log('suat', suat)
                        const times = dayjs(suat.ngayChieuGioChieu).format(
                          "DD/MM/YYYY ~ hh:mm"
                        );
                        return (
                          <Button
                            variant="outlined"
                            onClick={() => {
                              navigate(`/booking/${suat.maLichChieu}`);
                            }}
                          >
                            {times}
                          </Button>
                        );
                      })}
                    </Stack>
                  </Box>
                );
              })}
            </TabPanel>
          );
        })}
      </Box>
    </Container>
  );
};

export default ShowTimes;

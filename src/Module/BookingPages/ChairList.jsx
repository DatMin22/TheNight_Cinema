import React from "react";
import Chair from "./Chair";
import { Box, Grid, Stack, Typography } from "@mui/material";

const ChairList = ({ listChairInfo }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        border: "1px solid transparent",
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        padding: 1,
      }}
    >
      <Stack direction={'row'} spacing={2}  position={'fixed'} padding={'.5rem'} bgcolor={'#000'} borderRadius={'10px'}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          marginBottom: '1rem',
        }}>
          <span className="chuaDat" style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#f5cc0085',
            borderRadius: '6px',
            color: '#fff',

          }}></span>
          <span style={{ color: '#fff' }}>Chưa đặt</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          marginBottom: '1rem',
        }}>
          <span className="daDat" style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#909090',
            borderRadius: '6px',
            color: '#fff',

          }}></span>
          <span style={{ color: '#fff' }}>Đã đặt</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          marginBottom: '1rem',
        }}>
          <span className="vip" style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'rebeccapurple',
            borderRadius: '6px',
            color: '#fff',

          }}></span>
          <span style={{ color: '#fff' }}>Vip</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          marginBottom: '1rem',
        }}>
          <span className="Đang đặt" style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'red',
            borderRadius: '6px',

          }}></span>
          <span style={{ color: '#fff' }}>Đang đặt</span>
        </div>
      </Stack >
      <Grid container columns={10} gap={"15px"} marginTop={'5rem'} justifyContent={"center"}>
        {listChairInfo?.map((chair) => {
          return (
            <Grid item key={chair.maGhe}>
              <Chair chair={chair} />
            </Grid>
          );
        })}
      </Grid>
    </Box >
  );
};

export default ChairList;

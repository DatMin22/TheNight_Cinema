import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { PATH } from "../../../Routes/path";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../../../Store/LogInPagesSlice/slice";
import style from "../header.module.scss";
const UserButton = () => {
  const { user } = useSelector((state) => state.User);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(UserAction.setLogout("logout"));
    navigate("/");
  };
  return (
    <>
      <Box className={style.userAction} >
        {user ? (
          <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <Typography sx={{ textAlign: "center", color: '#FF5B5B', paddingX: '.2rem', fontWeight: 'bold' }}>{user.hoTen} </Typography>
            <Button variant="text" onClick={handleLogout} className="bt n" title="ĐĂNG XUẤT" sx={{}}>
              <i className="fa-solid fa-right-from-bracket"></i>
              {/* Đăng xuất */}
            </Button>
            {/* <button class="Btn">

              <div class="sign">
                <i class="fa-solid fa-right-from-bracket"></i>

            </div>

              <div class="text">Logout</div>
            </button> */}
          </Box>
        ) : (
          <Stack direction={"row"}>
            <Button onClick={() => navigate(PATH.REGISTER)} className="bt n" sx={{ color: 'white' }}>
              Đăng ký
            </Button>
            <Button onClick={() => navigate(PATH.LOG_IN)} className="b tn" sx={{ color: 'white' }} marginLeft={3}>
              Đăng nhập
            </Button>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default UserButton;

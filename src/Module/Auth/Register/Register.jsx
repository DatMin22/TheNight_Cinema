import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GROUP_CODE } from "../../../constant";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { registerAPI } from "../../../APIs/UserAPIs";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../Routes/path";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const schemaRegister = yup.object({
  hoTen: yup.string().required("Vui lòng nhập thông tin"),
  email: yup
    .string()
    .email("Không đúng định dạng Email")
    .required("Vui lòng nhập thông tin"),
  taiKhoan: yup
    .string()
    .required("Vui lòng nhập thông tin")
    .min(4, "Tài khoản phải có ít nhất 4 ký tự"),
  matKhau: yup
    .string()
    .required("Vui lòng nhập thông tin")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Mật khẩu chứa ít nhất 8 ký tự bao gồm 1 ký tự viết hoa, 1 ký tự đặc biệt, 1 ký tự số, 1 ký tự viết thường."
    ),
  soDt: yup
    .string()
    .required("Vui lòng nhập thông tin")
    .matches(/^\d+$/, "Vui lòng nhập số"),
});
const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUP_CODE,
      hoTen: "",
    },
    mode: "all",
    resolver: yupResolver(schemaRegister),
  });

  const { mutate: handleRegister, isPending } = useMutation({
    mutationFn: (values) => registerAPI(values),
    onSuccess: (values) => {
      navigate(PATH.LOG_IN);
    },
    onError: () => {
      alert("loi");
    },
  });
  const onSubmit = (values) => {
    const result = handleRegister(values);
  };
  return (
    <Container maxWidth="lg">
      <Typography
        sx={{ fontSize: "36px", fontWeight: "600" }}
        textAlign={"center"}
      >
        Register
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item lg={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <TextField
                label="Họ tên"
                fullWidth
                {...register("hoTen")}
                error={Boolean(errors.hoTen)}
                helperText={Boolean(errors.hoTen) && errors.hoTen.message}
              />

              <TextField
                label="Email"
                fullWidth
                {...register("email")}
                error={Boolean(errors.email)}
                helperText={Boolean(errors.email) && errors.email.message}
              />

              <TextField
                label="Tài Khoản"
                fullWidth
                {...register("taiKhoan")}
                error={Boolean(errors.taiKhoan)}
                helperText={Boolean(errors.taiKhoan) && errors.taiKhoan.message}
              />

              <TextField
                label="Mật Khẩu"
                type={showPassword ? "text" : "password"}
                fullWidth
                {...register("matKhau")}
                error={Boolean(errors.matKhau)}
                helperText={Boolean(errors.matKhau) && errors.matKhau.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Phone"
                fullWidth
                {...register("soDt")}
                error={Boolean(errors.soDt)}
                helperText={Boolean(errors.soDt) && errors.soDt.message}
              />

              <LoadingButton
                variant="contained"
                fullWidth
                color="warning"
                size="large"
                type="submit"
                loading={isPending}
              >
                Register
              </LoadingButton>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;

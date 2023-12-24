import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import style from "./bookingStyle.module.scss";
import "../../Style/base.scss";
import CurrencyFormat from "react-currency-format";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookingAPI } from "../../APIs/bookingAPIs";
import { BookingPageAction } from "../../Store/BookingPagesSlice/slice";
import Swal from "sweetalert2";

const PayBill = ({ movieInfo = {} }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const movieID = movieInfo.maLichChieu;

  const { chairBooking } = useSelector((state) => state.BookingPage);

  const gheThuong = [...chairBooking].filter(
    (item) => item.loaiGhe === "Thuong"
  );
  const gheVip = [...chairBooking].filter((item) => item.loaiGhe === "Vip");

  const { mutate: handleBooking } = useMutation({
    mutationFn: (payload) => bookingAPI(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      dispatch(BookingPageAction.clearChairBooking());
    },
  });
  const handleBookingList = (id, list) => {
    const newList = list.map((item) => ({
      maGhe: item.maGhe,
      giaVe: item.giaVe,
    }));
    const bookingList = { maLichChieu: id, danhSachVe: newList };
    const result = handleBooking(bookingList);
  };
  return (
    <Box>
      
      <Card sx={{ padding: 1,backgroundColor:'blanchedalmond' }}>
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={movieInfo.hinhAnh}
            sx={{ width: "123px", height: "150px", objectFit: "fill" }}
            alt="..."
          />
          <CardHeader title={movieInfo.tenPhim} />
        </Box>
        <CardContent sx={{ padding: 0, marginTop: 1 }}>
          <Typography variant="h6">
            {movieInfo.tenCumRap} ~ {movieInfo.tenRap}
            <Typography>
              Suất: {movieInfo.ngayChieu} - {movieInfo.gioChieu}
            </Typography>
          </Typography>
          <Divider sx={{ height: "1px", background: "#000", marginY: 1 }} />
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                Ghế Thường:{"  "}
                {gheThuong.length > 0 ? `x${gheThuong.length}` : ""}
              </Typography>
              <CurrencyFormat
                value={
                  gheThuong.length > 0
                    ? `${gheThuong.reduce((total, value) => {
                      return total + value.giaVe;
                    }, 0)}`
                    : ""
                }
                displayType={"text"}
                thousandSeparator={true}
                suffix={"VND"}
              />
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {gheThuong.map((item) => {
                return (
                  <div className={cn(`${style.chair}`)} style={{ margin: '.2rem' }}>{item.tenGhe}</div>
                );
              })}
            </Box>
          </Box>
          {/* <Divider sx={{ height: "1px", background: "red", marginY: 1 }} /> */}
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }} >
              <Typography  >
                Ghế Vip: {"  "} {gheVip.length > 0 ? `x${gheVip.length}` : ""}{" "}
              </Typography>
              <CurrencyFormat
                value={
                  gheVip.length > 0
                    ? `${gheVip.reduce((total, value) => {
                      return total + value.giaVe;
                    }, 0)}`
                    : ""
                }
                displayType={"text"}
                thousandSeparator={true}
                suffix={"VND"}
              />
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {gheVip.map((item) => {
                return (
                  <div className={cn(`${style.chair}`)} style={{ margin: '.2rem' }}>{item.tenGhe}</div>
                );
              })}
            </Box>
          </Box>
          <Divider sx={{ height: "1px", background: "#000", marginY: 1 }} />
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Tổng tiền:</Typography>
              <CurrencyFormat style={{ color: 'red', fontWeight: 'bolder', fontSize: '1.3rem' }}
                value={
                  chairBooking.length > 0
                    ? `${chairBooking.reduce((total, value) => {
                      return total + value.giaVe;
                    }, 0)}`
                    : ""
                }
                displayType={"text"}
                thousandSeparator={true}
                suffix={" VND"}
              />
            </Box>
            <Button
              fullWidth
              className="btn"
              sx={{
                // width: "90%",
                color: '#fff',
                margin: "auto",
              }}
              onClick={() => {
                if (chairBooking.length > 0) {
                  Swal.fire({
                    title: "Xác Nhận",
                    text: "Bạn có chắc muốn đặt vé này không?",
                    icon: "warning",
                    showCancelButton: true,
                    cancelButtonText: "Hủy",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Xác nhận",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Trạng Thái",
                        text: "Đặt vé thành công",
                        icon: "success",
                      });
                      handleBookingList(movieID, chairBooking);
                    }
                  });
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Lỗi",
                    text: "Vui lòng chọn ghế",
                  });
                }
              }}
            >
              Thanh Toán
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PayBill;

import fetcher from "./fetcher";

export const getListBookingAPI = async (movieBookingID) => {
  try {
    const response = await fetcher.get("/QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        maLichChieu: movieBookingID,
      },
    });
    return response.data.content;
  } catch (error) {}
};

export const bookingAPI = async (payload) => {
  
  try {
   
    const response = await fetcher.post("/QuanLyDatVe/DatVe/", payload)
    return response.data.content
  } catch (error) {
    
  }
}

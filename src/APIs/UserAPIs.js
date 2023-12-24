import { CURRENT_USER } from "../constant";
import fetcher from "./fetcher";

export const registerAPI = async (payload) => {
  try {
    const response = await fetcher.post("/QuanLyNguoiDung/DangKy", payload);
    //payload = {taikhoan, matkhau, ....}
    return response.data.content;
  } catch (error) {
    throw "Loi";
  }
};



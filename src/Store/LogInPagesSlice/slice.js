import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import Swal from "sweetalert2";
import axios from "axios";
import fetcher from "../../APIs/fetcher";
import { CURRENT_USER } from "../../constant";

export const loginUser = createAsyncThunk("user/loginUser", async (payload) => {
  console.log("payload", payload);
  try {
    const Request = await fetcher.post("/QuanLyNguoiDung/DangNhap", payload);
    const response = await Request.data.content;
    console.log("response", response);
    localStorage.setItem(CURRENT_USER, JSON.stringify(response));
    return response;
  } catch (error) {}
});

const initialState = {
  loading: false,
  user: localStorage.getItem(CURRENT_USER)
    ? JSON.parse(localStorage.getItem(CURRENT_USER))
    : null,
  error: null,
};

export const LogInPagesSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogout: (state, { payload }) => {
      localStorage.removeItem(CURRENT_USER);
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
      });
  },
});

export const { reducer: UserReducer, actions: UserAction } = LogInPagesSlice;

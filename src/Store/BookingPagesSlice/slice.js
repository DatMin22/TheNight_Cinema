import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chairBooking: [],
    chairBooked: []
}

export const BookingPageSlice = createSlice({
    name: "BookingPage",
    initialState,
    reducers: {
        setChairBooking: (state, { payload }) => {
            const index = state.chairBooking.findIndex((value) => value.tenGhe === payload.tenGhe);
            if(index !== -1) {
                state.chairBooking.splice(index, 1)
            } else {
                state.chairBooking.push(payload)
            };
          },
        clearChairBooking: (state, {payload}) => {
            state.chairBooking = []
        }
    }
});

export const {
    reducer: BookingPageReducer,
    actions: BookingPageAction,
} = BookingPageSlice;
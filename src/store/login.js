import { createSlice } from "@reduxjs/toolkit";
const loginInitialState = { loginStatus: false };

export const loginSlice = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {
    login(state) {
      state.loginStatus = true;
    },
    logout(state) {
      state.loginStatus = false;
    },
  },
});

export const loginSliceActions = loginSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loginInfo: {
    token: null,
    isLogin: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
      (state.loginInfo.isLogin = true),
        (state.loginInfo.token = action.payload.token);
    },
    LogOut: (state) => {
      (state.loginInfo.isLogin = false),
        (state.loginInfo.token = null),
        (state.user = null);
    },
  },
});

export const { LogOut, userLogin } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loadingState: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginState: (state, action) => {
      state.currentUser = action.payload;
    },
    loginSuccess: (state) => {
      state.loadingState = false;
    },
    loginProgress: (state) => {
      state.loadingState = true;
    },
    loginFailed: (state) => {
      state.loadingState = false;
    },
    logoutState: (state) => {
      state.currentUser = null;
    },
  },
});
export const { loginState, loginSuccess, loginProgress,loginFailed, logoutState } =
  userSlice.actions;

export default userSlice.reducer;

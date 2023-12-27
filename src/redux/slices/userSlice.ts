import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    id: "",
    name: "",
    user: "",
    accessToken: "",
  },
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.userInfo = {
        id: "",
        name: "",
        user: "",
        accessToken: "",
      };
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { resetUser, setUser } = userSlice.actions;

export default userSlice.reducer;

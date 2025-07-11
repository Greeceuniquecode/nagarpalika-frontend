import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserData } from "../../../interface/User";

interface UserState {
  users: UserData[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserData>) => {
      // Ensure state.users is always an array before pushing
      if (!Array.isArray(state.users)) {
        state.users = [];
      }
      state.users.push(action.payload);
    },
    clearUsers: (state) => {
      state.users = [];
    },
    setUserData: (state, action: PayloadAction<UserData[]>) => {
      // Defensive check
      state.users = Array.isArray(action.payload) ? action.payload : [];
    },
  },
});

export const { addUser, clearUsers, setUserData } = userSlice.actions;
export default userSlice.reducer;

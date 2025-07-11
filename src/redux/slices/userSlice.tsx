// userSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserData } from "../../../interface/User";

interface UsersListInterface {
  users: UserData[];
}

const initialState: UsersListInterface = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserData>) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<{ userId: string }>) => {
      state.users = state.users.filter(user => user.id !== action.payload.userId);
    },
    editUser: (state, action: PayloadAction<{ editeduser: UserData }>) => {
      const { editeduser } = action.payload;
      state.users = state.users.map(user => user.id === editeduser.id ? editeduser : user);
    },
    toggleUser: (state, action: PayloadAction<{ userId: string }>) => {
      state.users = state.users.map(user => user.id === action.payload.userId ? { ...user } : user);
    },
  },
});

export const { addUser, deleteUser, editUser, toggleUser } = userSlice.actions;
export default userSlice.reducer;

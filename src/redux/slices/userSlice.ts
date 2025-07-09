import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type{ UserData } from "../../../interface/User";

const initialState: UserData = {
studentName: "",
  dob: "",
  fatherName: "",
  motherName: "",
  birthPlace: "",
  gender: "",
  address: "",
  mobile: "",
  citizenshipNumber: "",
  citizenshipIssueDate: "",
  citizenshipType: "",
  district: "",
  municipality: "",
  wardNo: "",
  fatherCitizenshipType: "",
  motherCitizenshipType: "",
  spouseName: "",
  spouseCitizenshipType: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

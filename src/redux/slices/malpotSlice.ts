import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MalpotData } from "../../../interface/Malpot";

interface MalpotListInterface {
  malpots: MalpotData[];
}

const initialState: MalpotListInterface = {
  malpots: [],
};

export const malpotSlice = createSlice({
  name: "malpot",
  initialState,
  reducers: {
    addMalpot: (state, action: PayloadAction<MalpotData>) => {
      state.malpots.push(action.payload);
    },
    deleteMalpot: (state, action: PayloadAction<{ malpotId: string }>) => {
      state.malpots = state.malpots.filter(malpot => malpot.id !== action.payload.malpotId);
    },
    editMalpot: (state, action: PayloadAction<{ editedMalpot: MalpotData }>) => {
      const { editedMalpot } = action.payload;
      state.malpots = state.malpots.map(malpot => malpot.id === editedMalpot.id ? editedMalpot : malpot);
    },
  },
});

export const { addMalpot, deleteMalpot, editMalpot } = malpotSlice.actions;
export default malpotSlice.reducer;

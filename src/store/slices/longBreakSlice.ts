import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface longBreakState {
  longMinutes: number;
  longSeconds: number;
}

const initialState: longBreakState = {
  longMinutes: 15,
  longSeconds: 0,
};

const longBreakSlice = createSlice({
  name: "longBreak",
  initialState,
  reducers: {
    setLBMinutes: (state, action: PayloadAction<number>) => {
      state.longMinutes = action.payload;
    },
    setLBSeconds: (state, action: PayloadAction<number>) => {
      state.longSeconds = action.payload;
    },
    resetlongBreak: (state) => {
      state.longMinutes = state.longMinutes;
      state.longSeconds = state.longSeconds;
    },
  },
});

export const { setLBMinutes, setLBSeconds, resetlongBreak } =
  longBreakSlice.actions;
export default longBreakSlice.reducer;

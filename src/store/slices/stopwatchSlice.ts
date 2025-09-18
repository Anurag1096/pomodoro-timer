import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StopwatchState {
  lapTime: string;
  overallTime: number;
}

const initialState: StopwatchState[] = [
];

const stopwatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    setLaps: (state, action: PayloadAction<StopwatchState>) => {
      state.push({
        lapTime: action.payload.lapTime,
        overallTime: action.payload.overallTime,
      });
    },
    resetLaps: (state) => {
      return [];
    },
  },
});


export const {setLaps,resetLaps}= stopwatchSlice.actions;
export default stopwatchSlice.reducer;

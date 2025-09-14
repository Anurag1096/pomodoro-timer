import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StopwatchState {
  lapCount: number;
  lapTime: number;
  overallTime: number;
}

const initialState: StopwatchState[] = [
  {
    lapCount: 0,
    lapTime: 0,
    overallTime: 0,
  },
];

const StopwatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    setLaps: (state, action: PayloadAction<StopwatchState>) => {
      state.push({
        lapCount: action.payload.lapCount,
        lapTime: action.payload.lapTime,
        overallTime: action.payload.overallTime,
      });
    },
    resetLaps: (state) => {
      return [
        {
          lapCount: 0,
          lapTime: 0,
          overallTime: 0,
        },
      ];
    },
  },
});

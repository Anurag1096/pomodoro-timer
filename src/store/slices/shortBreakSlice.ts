import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface ShortBreakState{
    shortMinutes:number;
    shortSeconds:number;
}

const initialState:ShortBreakState={
shortMinutes:5,
shortSeconds:0,
}



const shortBreakSlice=createSlice({
    name:'shortBreak',
    initialState,
    reducers:{
        setSBMinutes:(state,action:PayloadAction<number>)=>{
              state.shortMinutes=action.payload
        },
        setSBSeconds:(state,action:PayloadAction<number>)=>{
            state.shortSeconds=action.payload
        },
        resetShortBreak:(state)=>{
            state.shortMinutes=state.shortMinutes
            state.shortSeconds=state.shortSeconds
        }
    }
})


export const {setSBMinutes,setSBSeconds,resetShortBreak}=shortBreakSlice.actions;
export default shortBreakSlice.reducer;
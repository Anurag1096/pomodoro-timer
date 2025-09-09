import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface TimerState{
    hours:number;
    minutes:number;
    seconds:number;
    sessionCount:number;
}


const initialState : TimerState={
    hours:0,
    minutes:25,
    seconds:0,
    sessionCount:0
}

const timerSlice =createSlice({
    name:"timer",
    initialState,
    reducers:{
        setHours(state,action:PayloadAction<number>){
            state.hours=action.payload;
        },
        setMinutes(state,action:PayloadAction<number>){
            state.minutes=action.payload;
        },
        setSeconds(state,action:PayloadAction<number>){
            state.seconds=action.payload;
        },
        updateSessionCount(state){
            state.sessionCount+=state.sessionCount;
        },
        timerReset(state){
            state.hours=state.hours
            state.minutes=state.minutes
            state.seconds=state.seconds
        }
    }
});


export const {setHours,setMinutes,setSeconds,timerReset}=timerSlice.actions;
export default timerSlice.reducer
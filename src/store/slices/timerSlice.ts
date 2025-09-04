import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface TimerState{
    hours:number;
    minutes:number;
    seconds:number;
}


const initialState : TimerState={
    hours:0,
    minutes:25,
    seconds:0
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
        timerReset(state){
            state.hours=0
            state.minutes=25
            state.seconds=0
        }
    }
});


export const {setHours,setMinutes,setSeconds,timerReset}=timerSlice.actions;
export default timerSlice.reducer
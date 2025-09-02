import { createSlice } from "@reduxjs/toolkit";

interface SidebarState{
    isExpanded:boolean;
}

const initialState:SidebarState={
  isExpanded:false,
}


const sidebarDeskSlice = createSlice({
    name:'sidebarDesk',
    initialState,
    reducers:{
        setIsExpanded(state){
           return {...state,isExpanded:!state.isExpanded}
        }
    }
})

export const {setIsExpanded}= sidebarDeskSlice.actions;
export default sidebarDeskSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

interface SidebarState{
    isExpanded:boolean;
    isOpen:boolean;
}

const initialState:SidebarState={
  isExpanded:false,
  isOpen:false,
}


const sidebarDeskSlice = createSlice({
    name:'sidebarDesk',
    initialState,
    reducers:{
        setIsExpanded(state){
           return {...state,isExpanded:!state.isExpanded}
        },
        setIsOpen(state){
            return {...state,isOpen:!state.isOpen}
        }
    }
})

export const {setIsExpanded,setIsOpen}= sidebarDeskSlice.actions;
export default sidebarDeskSlice.reducer;
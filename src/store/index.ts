import { configureStore} from "@reduxjs/toolkit";
import timerSlice from "./slices/timerSlice"
import sidebarDeskSlice from '@/store/slices/sidebarDesk';
import shortBreakSlice from '@/store/slices/shortBreakSlice'
import longBreakSlice from '@/store/slices/longBreakSlice'
export const store= configureStore({
reducer:{
    timer:timerSlice,
    sidebarDesk:sidebarDeskSlice,
    shortBreak:shortBreakSlice,
    longBreak:longBreakSlice,
}
})


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;
import { configureStore} from "@reduxjs/toolkit";
import timerSlice from "./slices/timerSlice"
import sidebarDeskSlice from '@/store/slices/sidebarDesk';
export const store= configureStore({
reducer:{
    timer:timerSlice,
    sidebarDesk:sidebarDeskSlice,
}
})


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;
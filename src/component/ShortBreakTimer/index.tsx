import Timer from "../Timer"
import { useAppSelector,useAppDispatch } from "@/store/hooks";
import { resetShortBreak } from "@/store/slices/shortBreakSlice";
import { useCallback, useState } from "react";
const ShortBreakTimer=()=>{
     const dispatch=useAppDispatch()
     const {  shortMinutes, shortSeconds } = useAppSelector((state) => state.shortBreak);
     const [isRunning, setIsRunning] = useState<boolean>(false);
   
     const resetShortTimer = useCallback(() => {
       //reset  hours ,min and seconds.
      dispatch(resetShortBreak())
       setIsRunning(false);
     }, [dispatch,setIsRunning]);
     const startTimer = () => setIsRunning(true);
     const stopTimer = () => setIsRunning(false);
   
   
   return (<>
     <Timer
        hours={0}
        minutes={shortMinutes}
        seconds={shortSeconds}
        isRunning={isRunning}
        onStart={startTimer}
        onStop={stopTimer}
        onReset={resetShortTimer}
        />
    </>)
}


export default ShortBreakTimer;
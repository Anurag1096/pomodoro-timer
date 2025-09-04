import {useState,useEffect,useRef} from 'react';
import { StopwatchState } from './types';





const StopWatch=({isSwatchRunning,onStart,onStop}:StopwatchState)=>{
const pausedRef = useRef<number>(0);
const intervalRef = useRef<NodeJS.Timeout | null>(null);
const [passedMs, setPassedMs] = useState<number>(0);

useEffect(()=>{


    if(isSwatchRunning){
        const start=performance.now()
        const basePassed=pausedRef.current
        intervalRef.current=setInterval(()=>{
           const ellapsed =performance.now() - start
          
           const passed = Math.max(basePassed + ellapsed,0)

           setPassedMs(passed)
        },1)
    }else{
      pausedRef.current=passedMs
    }

    return ()=>{
        if(intervalRef.current){
            clearInterval(intervalRef.current)
            intervalRef.current=null;
        }
    }
},[isSwatchRunning])

const resetSWatch=()=>{
    if(intervalRef.current){
        clearInterval(intervalRef.current)
        intervalRef.current=null;
    }
    pausedRef.current=0
    setPassedMs(0)
    onStop()
}

  const hh = Math.floor(passedMs / 3600000);
  const mm = Math.floor((passedMs % 3600000) / 60000);
  const ss = Math.floor((passedMs % 60000) / 1000);
  const ms=  (passedMs%1000);
    return (
        <div>
      {hh.toString().padStart(2, "0")}:
      {mm.toString().padStart(2, "0")}:
      {ss.toString().padStart(2, "0")}:
      {Math.floor(ms).toString().padStart(2,"0")}<br/>
      <button onClick={()=>onStart()}>Start</button><br/>
      <button onClick={()=>onStop()}>Stop</button>
      <button onClick={resetSWatch}>Reset</button>
    </div>
    )
}


export default StopWatch;
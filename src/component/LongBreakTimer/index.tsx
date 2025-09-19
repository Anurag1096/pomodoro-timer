import Timer from "../Timer";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { resetlongBreak } from "@/store/slices/longBreakSlice";
import { useCallback, useState } from "react";
const LongBreakTimer = () => {
  const dispatch = useAppDispatch();
  const { longMinutes, longSeconds } = useAppSelector(
    (state) => state.longBreak
  );
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const resetLongTimer = useCallback(() => {
    //reset  hours ,min and seconds.
    dispatch(resetlongBreak());
    setIsRunning(false);
  }, [dispatch, setIsRunning]);
  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
 const updatesessionCount=()=>{
    console.log('Timmer finished')
  }
  return (
    <>
      <div style={{ color: "#38858A" }}>
        <Timer
          hours={0}
          updatesessionCount={updatesessionCount}
          minutes={longMinutes}
          seconds={longSeconds}
          isRunning={isRunning}
          onStart={startTimer}
          onStop={stopTimer}
          onReset={resetLongTimer}
        />
      </div>
    </>
  );
};

export default LongBreakTimer;

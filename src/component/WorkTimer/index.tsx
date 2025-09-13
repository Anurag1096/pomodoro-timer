import Timer from "../Timer";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { timerReset } from "@/store/slices/timerSlice";
import { useCallback, useState } from "react";
const WorkTimer = () => {
  const dispatch = useAppDispatch();
  const { hours, minutes, seconds } = useAppSelector((state) => state.timer);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const resetTimer = useCallback(() => {
    //reset  hours ,min and seconds.
    dispatch(timerReset());
    setIsRunning(false);
  }, [dispatch, setIsRunning]);
  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);

  return (
    <>
      <div style={{ color: "#DF4F47" }}>
        <Timer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isRunning={isRunning}
          onStart={startTimer}
          onStop={stopTimer}
          onReset={resetTimer}
        />
      </div>
    </>
  );
};

export default WorkTimer;

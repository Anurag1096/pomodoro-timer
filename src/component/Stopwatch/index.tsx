import { useState, useEffect, useRef } from "react";
import styles from "@/component/Stopwatch/stopwatch.module.css";
import { useAppDispatch } from "@/store/hooks";
import {setLaps,resetLaps} from '@/store/slices/stopwatchSlice'
import { StopwatchState } from "./types";

const StopWatch = ({ isSwatchRunning, onStart, onStop }: StopwatchState) => {
  const dispatch=useAppDispatch()
  const pausedRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [passedMs, setPassedMs] = useState<number>(0);
  useEffect(() => {
    if (isSwatchRunning) {
      const start = performance.now();
      const basePassed = pausedRef.current;
      intervalRef.current = setInterval(() => {
        const ellapsed = performance.now() - start;

        const passed = Math.max(basePassed + ellapsed, 0);

        setPassedMs(passed);
      }, 1);
    } else {
      pausedRef.current = passedMs;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isSwatchRunning]);

  const resetSWatch = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    pausedRef.current = 0;
    setPassedMs(0);
    dispatch(resetLaps());
    onStop();
  };

  const mm = Math.floor((passedMs % 3600000) / 60000).toString().padStart(2, "0");
  const ss = Math.floor((passedMs % 60000) / 1000).toString().padStart(2, "0");
  const ms = Math.floor(passedMs % 1000).toString().padStart(2, "0")


  const handleLaps=()=>{
    const lapObj={
      lapTime:`${mm}:${ss}:${ms}`,
      overallTime:passedMs,
    }
    dispatch(setLaps(lapObj));
  }
  return (
    <div className={styles["stopwatch--wrapper"]}>
      <div style={{ textAlign: "center" }}>
        <span className={styles["hhmmss--size"]}>
          {mm}:
        </span>
        <span className={styles["hhmmss--size"]}>
          {ss}
        </span>
        :
        <span>
          {ms}
          <br />
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "4px solid rgba(24,24,27,1)",
          padding: "1rem",
        }}
      >
        {isSwatchRunning ? (
          <button 
          className={styles["stopwatch--btn"]}
          onClick={handleLaps}
          >Lap</button>
        ) : (
          <button
            className={styles["stopwatch--btn"]}
            onClick={() => onStart()}
          >
            Start
          </button>
        )}
        <br />
        <button className={styles["stopwatch--btn"]} onClick={() => onStop()}>
          Stop
        </button>
        <button className={styles["stopwatch--btn"]} onClick={resetSWatch}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;

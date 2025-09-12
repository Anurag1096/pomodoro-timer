import { useState, useEffect, useRef } from "react";
import styles from "@/component/Stopwatch/stopwatch.module.css";
import { StopwatchState } from "./types";

const StopWatch = ({ isSwatchRunning, onStart, onStop }: StopwatchState) => {
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
    onStop();
  };

  const hh = Math.floor(passedMs / 3600000);
  const mm = Math.floor((passedMs % 3600000) / 60000);
  const ss = Math.floor((passedMs % 60000) / 1000);
  const ms = passedMs % 1000;
  return (
    <div className={styles["stopwatch--wrapper"]}>
    
      <span className={styles["hhmmss--size"]}>{mm.toString().padStart(2, "0")}:</span>
      <span className={styles["hhmmss--size"]}>{ss.toString().padStart(2, "0")}</span>:
      <span >
        {Math.floor(ms).toString().padStart(2, "0")}
        <br />
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "4px solid rgba(24,24,27,1)",
          padding: "1rem",
        }}
      >
        <button className={styles["stopwatch--btn"]} onClick={() => onStart()}>
          Start
        </button>
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

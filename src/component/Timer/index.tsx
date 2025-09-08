import { TimerState } from "./types";
import { useState, useEffect, useMemo, useRef } from "react";
import styles from "@/component/Timer/timer.module.css";
import HOURS from "./Hours";
import MINUTES from "./Minutes";
import SECONDS from "./Seconds";

const Timer = ({ hours, minutes, seconds, isRunning, onStart, onStop, onReset }: TimerState) => {
  // convert input props into milliseconds
  const totalDuration = useMemo(
    () => Math.max(0, hours * 3600000 + minutes * 60000 + seconds * 1000),
    [hours, minutes, seconds]
  );
  const finishedRef=useRef(null)
  const pausedRef = useRef(totalDuration);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [remainingMs, setRemainingMs] = useState<number>(totalDuration);
  const playFinishedSound=()=>{
    finishedRef.current.play()
  }
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isRunning) {
      const start = performance.now();
      const baseRemaining = pausedRef.current;

      timer = setInterval(() => {
        const elapsed = performance.now() - start;
        const remaining = Math.max(baseRemaining - elapsed, 0);
        setRemainingMs(remaining);

        if (remaining <= 0) {
          playFinishedSound()
          clearInterval(timer);
          intervalRef.current = null;
          pausedRef.current = totalDuration;
          setRemainingMs(0);
        }
      }, 1000);

      intervalRef.current = timer;
    } else {
      // Pause → store current remaining time
      pausedRef.current = remainingMs;
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, totalDuration]);

  // Sync when parent resets duration
  useEffect(() => {
    setRemainingMs(totalDuration);
    pausedRef.current = totalDuration;
  }, [totalDuration]);

  // 🔑 Reset handler
  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    pausedRef.current = totalDuration;
    setRemainingMs(totalDuration);
     // let parent also reset Redux state
     onReset()
  };

  const hh = Math.floor(remainingMs / 3600000);
  const mm = Math.floor((remainingMs % 3600000) / 60000);
  const ss = Math.floor((remainingMs % 60000) / 1000);

  return (
    <>
      <div className={styles["timer-wrapper"]}>
        <HOURS Hours={hh} />:
        <MINUTES Minutes={mm} />:
        <SECONDS Seconds={ss} />
      </div>
      <audio ref={finishedRef} src={"/audio/finishSound.mp3"}/>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Timer;

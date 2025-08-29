import { TimerState } from "./types";
import { useState, useEffect } from "react";
import "./timer.css"
import HOURS from "./Hours";
import MINUTES from "./Minutes";
import SECONDS from "./Seconds";


const Timer = ({ hours, minutes, seconds, onReset }: TimerState) => {
  // convert input props into milliseconds
  const totalDuration = hours * 3600000 + minutes * 60000 + seconds * 1000;
  const [remainingMs, setRemainingMs] = useState<number>(totalDuration);
  
  useEffect(() => {
    const start = performance.now();
    // need to set the above comented login.
    const timer = setInterval(() => {
      const elapsed = performance.now() - start;
      let remaining = Math.max(totalDuration - elapsed, 0);
      setRemainingMs(remaining);
      if (remaining <= 0) {
        clearInterval(timer);
        remaining = 0;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [totalDuration]);

  const hh = Math.floor(remainingMs / 3600000);
  const mm = Math.floor((remainingMs % 3600000) / 60000);
  const ss = Math.floor((remainingMs % 60000) / 1000);

  return (
    <>
      <div className="timer-wrapper">
        <HOURS Hours={hh} />:
        <MINUTES Minutes={mm} />:
        <SECONDS Seconds={ss} />:
      </div>
    </>
  );
};

export default Timer;

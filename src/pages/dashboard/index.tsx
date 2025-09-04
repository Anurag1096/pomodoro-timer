// pages/dashboard/index.tsx
import DashboardLayout from "@/component/Layout";
import { useCallback, useState } from "react";
import Timer from "@/component/Timer";
import { useAppSelector,useAppDispatch } from "@/store/hooks";
import { timerReset } from "@/store/slices/timerSlice";
export default function DashboardPage() {
  const dispatch=useAppDispatch()
  const { hours, minutes, seconds } = useAppSelector((state) => state.timer);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const resetTimer = useCallback(() => {
    //reset  hours ,min and seconds.
   dispatch(timerReset())
    setIsRunning(false);
  }, [dispatch,setIsRunning]);
  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Dashboard Home</h1>
      <Timer
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        isRunning={isRunning}
        onStart={startTimer}
        onStop={stopTimer}
        onReset={resetTimer}
      />
    </DashboardLayout>
  );
}

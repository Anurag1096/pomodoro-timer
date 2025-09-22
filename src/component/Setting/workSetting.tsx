import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setHours, setMinutes, setSeconds } from "@/store/slices/timerSlice";
import { ChangeEvent, useState } from "react";
import styles from '@/component/Setting/Setting.module.css'
type SettingType={
  onClose:()=>void;
}

interface FormState{
  Hours:number,
  Minutes:number,
  Seconds:number,
}
const WorkSetting = ({onClose}:SettingType) => {
  const dispatch = useAppDispatch();
  const { hours, minutes, seconds } = useAppSelector((state) => state.timer);
  const [formState, setFormState] = useState<FormState>({
    Hours: hours,
    Minutes: minutes,
    Seconds: seconds,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name= e.target.name as keyof FormState;
    const value=Number(e.target.value)

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setHours(formState.Hours));
    dispatch(setMinutes(formState.Minutes));
    dispatch(setSeconds(formState.Seconds));
    console.log("onClose:", onClose);
    onClose()
  };
  return (
    <>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="hours">
          Hours
          <br />
          <input
          className={styles["inputNumber"]}
            id="hours"
            name="Hours"
            type="number"
            value={formState.Hours}
            min={0}
            onChange={handleChange}
          />
        </label>
        <div>
          <label htmlFor="minutes">
            Minutes
            <br />
            <input
            className={styles["inputNumber"]}
              id="minutes"
              min={0}
               max={60}
              name="Minutes"
              type="number"
              value={formState.Minutes}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="seconds">
            Seconds
            <br />
            <input
            className={styles["inputNumber"]}
              id="seconds"
              min={0}
              max={60}
              name="Seconds"
              type="number"
              value={formState.Seconds}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className={`${styles.btn} ${styles["btn--primary"]}`} type="submit">Save</button>
      </form>
    </>
  );
};

export default WorkSetting;

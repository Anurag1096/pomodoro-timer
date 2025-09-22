import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSBMinutes,setSBSeconds } from "@/store/slices/shortBreakSlice";
import { ChangeEvent, useState } from "react";
import styles from '@/component/Setting/Setting.module.css'
type SettingType={
  onClose:()=>void;
}


interface FormState{
  Minutes:number,
  Seconds:number,
}
const ShortBreakSetting = ({onClose}:SettingType) => {
  const dispatch = useAppDispatch();
  const { shortMinutes,shortSeconds} = useAppSelector((state) => state.shortBreak);
  const [formState, setFormState] = useState<FormState>({

    Minutes: shortMinutes,
    Seconds: shortSeconds,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof FormState;
    const value=Number(e.target.value);

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSBMinutes(formState.Minutes));
    dispatch(setSBSeconds(formState.Seconds));
    onClose()
  };
  return (
    <>
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor="minutes">
            Minutes
            <br />
            <input
            className={styles["inputNumber"]}
              id="minutes"
              name="Minutes"
              type="number"
              value={formState.Minutes}
              min={0}
               max={60}
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
              name="Seconds"
              type="number"
              min={0}
               max={60}
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

export default ShortBreakSetting;

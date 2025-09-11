import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSBMinutes,setSBSeconds } from "@/store/slices/shortBreakSlice";
import { useState } from "react";
import styles from '@/component/Setting/Setting.module.css'

const ShortBreakSetting = () => {
  const dispatch = useAppDispatch();
  const { shortMinutes,shortSeconds} = useAppSelector((state) => state.shortBreak);
  const [formState, setFormState] = useState({

    Minutes: shortMinutes,
    Seconds: shortSeconds,
  });

  const handleChange = (e: { target: { name: unknown; value: unknown } }) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: unknown) => {
    e.preventDefault();
    dispatch(setSBMinutes(formState.Minutes));
    dispatch(setSBSeconds(formState.Seconds));
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

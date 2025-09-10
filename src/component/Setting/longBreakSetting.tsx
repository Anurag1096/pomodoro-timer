import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLBMinutes,setLBSeconds} from "@/store/slices/longBreakSlice";
import { useState } from "react";
import styles from '@/component/Setting/Setting.module.css'

const LongBreakSetting = () => {
  const dispatch = useAppDispatch();
  const {longMinutes,longSeconds} = useAppSelector((state) => state.longBreak);
  const [formState, setFormState] = useState({
    Minutes: longMinutes,
    Seconds: longSeconds,
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
    dispatch(setLBMinutes(formState.Minutes));
    dispatch(setLBSeconds(formState.Seconds));
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
              min={0}
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
              name="Seconds"
              min={0}
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

export default LongBreakSetting;

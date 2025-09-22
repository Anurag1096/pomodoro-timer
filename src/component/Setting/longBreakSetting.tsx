import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLBMinutes,setLBSeconds} from "@/store/slices/longBreakSlice";
import { useEffect,useState } from "react";
import styles from '@/component/Setting/Setting.module.css'
type SettingType={
  onClose:()=>void;
}
const LongBreakSetting = ({onClose}:SettingType) => {
  const dispatch = useAppDispatch();

  const sessionCount= useAppSelector(state=>state.timer.sessionCount)
  console.log("session count",sessionCount)
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
useEffect(() => {
  if (sessionCount > 4) {
    setFormState((prev) => ({
      ...prev,
      Minutes: 15,
      Seconds: 0,
    }));
  }
}, [sessionCount]);

  const handleSubmit = (e: unknown) => {
    e.preventDefault();
    dispatch(setLBMinutes(formState.Minutes));
    dispatch(setLBSeconds(formState.Seconds));
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
              min={0}
               max={60}
              disabled={sessionCount>4}
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
               max={60}
              disabled={sessionCount>4}
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

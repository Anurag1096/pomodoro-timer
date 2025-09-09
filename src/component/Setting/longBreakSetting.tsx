import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLBMinutes,setLBSeconds} from "@/store/slices/longBreakSlice";
import { useState } from "react";


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
              id="minutes"
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
              id="seconds"
              name="Seconds"
              type="number"
              value={formState.Seconds}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default LongBreakSetting;

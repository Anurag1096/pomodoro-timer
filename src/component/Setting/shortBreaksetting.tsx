import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSBMinutes,setSBSeconds } from "@/store/slices/shortBreakSlice";
import { useState } from "react";


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
      <form onSubmit={handleSubmit}>
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

export default ShortBreakSetting;

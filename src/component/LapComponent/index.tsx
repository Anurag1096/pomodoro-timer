import { useAppSelector } from "@/store/hooks";
import styles from '@/component/LapComponent/LapComponent.module.css'
const LapComponent = () => {
  const lapsList = useAppSelector((state) => state.stopwatch);

  return (
    <table className={styles['table--wrapper']}>
      <thead>
        <tr>
          <th className={styles["table--headItems"]}>Lap</th>
          <th className={styles["table--headItems"]}>LapTime</th>
          <th className={styles["table--headItems"]}>Overall Time</th>
        </tr>
      </thead>
      <tbody className={styles['table--body']}>
        {lapsList.length > 0 ? (
          lapsList.map((listItems,index) => (

            <tr key={listItems.lapTime}>
              <td className={styles["table--headItems"]}>{index+1}</td>
              <td className={styles["table--headItems"]}>{listItems.lapTime}</td>
              <td className={styles["table--headItems"]}>{listItems.overallTime}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} style={{color:"white"}}>No laps recorded</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default LapComponent;

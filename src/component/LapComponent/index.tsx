import { useAppSelector } from "@/store/hooks";

const LapComponent = () => {
  const lapsList = useAppSelector((state) => state.stopwatch);

  return (
    <table>
      <thead>
        <tr>
          <th>Lap</th>
          <th>LapTime</th>
          <th>Overall Time</th>
        </tr>
      </thead>
      <tbody>
        {lapsList && lapsList.length > 0 ? (
          lapsList.map((listItems) => (
            <tr key={listItems.lapCount}>
              <td>{listItems.lapCount}</td>
              <td>{listItems.lapTime}</td>
              <td>{listItems.overallTime}</td>
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

import React from "react";
import Styles from '@/component/Timer/timer.module.css'
type HoursProps = {
  Hours: number;
};
const HOURS = ({ Hours }: HoursProps) => {
  return <div className={Styles['work--color']}>{`${Hours ? Hours.toString().padStart(2, "0")+":" : " "}`}</div>;
};

export default HOURS;

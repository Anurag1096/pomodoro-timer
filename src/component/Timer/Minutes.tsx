import React from 'react'
import Styles from '@/component/Timer/timer.module.css'
type MinutesProps = {
  Minutes: number; 
};
const MINUTES = ({Minutes}:MinutesProps) => {
  return (
    <div className={Styles["hhmmss--size"]}>{`${Minutes.toString().padStart(2,"0")}`}</div>
  )
}

export default MINUTES
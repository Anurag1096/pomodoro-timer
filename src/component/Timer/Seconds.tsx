import React from 'react'
import Styles from '@/component/Timer/timer.module.css'
type SecondsProps = {
  Seconds: number; 
};
const SECONDS = ({Seconds}:SecondsProps) => {
  return (
    <div className={Styles["hhmmss--size"]}>{`${Seconds.toString().padStart(2,"0")}`}</div>
  )
}

export default SECONDS
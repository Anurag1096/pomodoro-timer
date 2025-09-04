import React,{useState} from 'react'
import styles from '@/pages/dashboard/styles/Overview.module.css'
import StopWatch from '@/component/Stopwatch'
const Overview = () => {
const [isSwatchRunning,setSWatchRunning]=useState<boolean>(false)
const start=()=>setSWatchRunning(true)
const stop=()=>setSWatchRunning(false)  


  return (<>
    <div className={styles["overview-wrapper"]}>Overview</div>
    <StopWatch isSwatchRunning={isSwatchRunning} onStart={start} onStop={stop}/>

    </>
  )
}

export default Overview

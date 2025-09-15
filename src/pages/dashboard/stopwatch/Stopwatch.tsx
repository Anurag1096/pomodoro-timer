import React,{useState} from 'react'
import styles from '@/pages/dashboard/styles/Overview.module.css'
import StopWatch from '@/component/Stopwatch'
import LapComponent from '@/component/LapComponent'
const StopwatchPage = () => {
const [isSwatchRunning,setSWatchRunning]=useState<boolean>(false)
const start=()=>setSWatchRunning(true)
const stop=()=>setSWatchRunning(false)  


  return (<>
    asdf
    <StopWatch isSwatchRunning={isSwatchRunning} onStart={start} onStop={stop}/>
      
        <LapComponent/>
      
    </>
  )
}

export default StopwatchPage

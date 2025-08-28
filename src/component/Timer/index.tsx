import { TimerState } from "./types";
// The timer will have three properties 
// Hour's, Minute's and Second's.
// The timer component could be manipulated from outside 
// The timer recieves these three properties
// The logic of manupulation will be handled by this file.
// Now need to figure out the should i create different comp for hour,min and sec.

/*
timer logic
let start= performance.now()
let totalDuration= 1* 60* 1000;
// now we create the function which will dispaly the timer
const displayTimer=(leftms)=>{
   let hours = Math.floor(leftms / 3600000);
  let min = Math.floor((leftms % 3600000) / 60000);
  let sec = Math.floor((leftms % 60000) / 1000);

  // format with leading zeros
  let hh = hours.toString().padStart(2, "0");
  let mm = min.toString().padStart(2, "0");
  let ss = sec.toString().padStart(2, "0");

  console.log(`${hh}:${mm}:${ss}`);
}
const timer= setInterval(()=>{
    let elapsed= performance.now() - start;
    let remaining= totalDuration - elapsed
    if (remaining <=0){
        clearInterval(timer)
        remaining=0
    }else{
        displayTimer(remaining)
    }
},1000)
*/
const Timer =({hours,minutes,seconds}:TimerState)=>{
    
    
    return (<>
    
    </>)
}

export default Timer;

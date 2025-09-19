export interface TimerState{
    hours:number,
    minutes:number,
    seconds:number,
    isRunning:boolean,
    onStart:()=>void,
    updatesessionCount:()=>void;
    onStop:()=>void,
    onReset:()=>void;
}
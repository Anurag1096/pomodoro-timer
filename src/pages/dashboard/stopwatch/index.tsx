import DashboardLayout from "@/component/Layout"
import StopwatchPage from "./Stopwatch"


const stopwatch=()=>{
    return (
        <DashboardLayout name="Stopwatch">
            <StopwatchPage />
            
        </DashboardLayout>
    )
}

export default stopwatch;
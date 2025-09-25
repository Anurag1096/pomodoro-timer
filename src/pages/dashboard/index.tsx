// pages/dashboard/index.tsx
import DashboardLayout from "@/component/Layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WorkTimer from "@/component/WorkTimer";
import ShortBreakTimer from "@/component/ShortBreakTimer";
import LongBreakTimer from "@/component/LongBreakTimer";
import style from '@/pages/dashboard/styles/Pomodoro.module.css'
export default function DashboardPage() {
  return (
    <DashboardLayout name="Pomodoro">
      {/* this contains timer component */}
      <Tabs>
        <TabList className={style["tablist--wrapper"]}>
          <Tab className={style.customTab} selectedClassName={style.selectedTab}>Work</Tab>
          <Tab className={style.customTab} selectedClassName={style.selectedTab}>Short Break</Tab>
          <Tab className={style.customTab} selectedClassName={style.selectedTab}>Long Break</Tab>
        </TabList>
        <TabPanel>
          <WorkTimer />
        </TabPanel>
        <TabPanel>
          <ShortBreakTimer />
        </TabPanel>
        <TabPanel>
          <LongBreakTimer />
        </TabPanel>
      </Tabs>
    </DashboardLayout>
  );
}

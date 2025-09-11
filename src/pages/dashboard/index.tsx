// pages/dashboard/index.tsx
import DashboardLayout from "@/component/Layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WorkTimer from "@/component/WorkTimer";
import ShortBreakTimer from "@/component/ShortBreakTimer";
import LongBreakTimer from "@/component/LongBreakTimer";
export default function DashboardPage() {
  return (
    <DashboardLayout>
      
      <Tabs>
        <TabList>
          <Tab>Work</Tab>
          <Tab>Short Break</Tab>
          <Tab>Long Break</Tab>
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

// pages/dashboard/index.tsx
import DashboardLayout from "@/component/Layout";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Timer from "@/component/Timer";
import WorkTimer from "@/component/WorkTimer";
export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Dashboard Home</h1>
      <Tabs>
        <TabList>
          <Tab>Wrok</Tab>
          <Tab>Short Break</Tab>
          <Tab>Long Break</Tab>
        </TabList>
        <TabPanel>
          <WorkTimer />
        </TabPanel>
        <TabPanel>
          Short break
        </TabPanel>
        <TabPanel>
          longBreak
        </TabPanel>
      </Tabs>
    </DashboardLayout>
  );
}

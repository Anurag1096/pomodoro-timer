import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import WorkSetting from "./workSetting";
import ShortBreakSetting from "./shortBreaksetting";
import LongBreakSetting from "./longBreakSetting";
import style from "@/component/Setting/Setting.module.css";
import "react-tabs/style/react-tabs.css";
const SettingComponent = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Work Setting</Tab>
          <Tab>Short Break</Tab>
          <Tab>Long Break</Tab>
        </TabList>
        <TabPanel
          className={style.customPanel}
          selectedClassName={`${style.customPanel} ${style.selectedPanel}`}
        >
          <WorkSetting />
        </TabPanel>
        <TabPanel
          className={style.customPanel}
          selectedClassName={`${style.customPanel} ${style.selectedPanel}`}
        >
          <ShortBreakSetting />
        </TabPanel>
        <TabPanel
          className={style.customPanel}
          selectedClassName={`${style.customPanel} ${style.selectedPanel}`}
        >
          <LongBreakSetting />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default SettingComponent;

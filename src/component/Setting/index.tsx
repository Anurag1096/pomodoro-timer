import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import WorkSetting from "./workSetting";
import ShortBreakSetting from "./shortBreaksetting";
import LongBreakSetting from "./longBreakSetting";
import style from "@/component/Setting/Setting.module.css";
import "react-tabs/style/react-tabs.css";
const SettingComponent = () => {
  return (
    <>
      <h1 style={{marginLeft:"0.6rem",marginBottom:"0.5rem", fontStyle:"italic"
      }}>Settings</h1>
      <Tabs>
        <TabList className={style["tablist--wrapper"]}>
          <Tab
            className={style.customTab}
            selectedClassName={style.selectedTab}
          >
            Work{" "}
          </Tab>
          <Tab
            className={style.customTab}
            selectedClassName={style.selectedTab}
          >
            Short Break
          </Tab>
          <Tab
            className={style.customTab}
            selectedClassName={style.selectedTab}
          >
            Long Break
          </Tab>
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

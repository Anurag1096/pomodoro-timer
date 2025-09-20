import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import WorkSetting from "./workSetting";
import ShortBreakSetting from "./shortBreaksetting";
import LongBreakSetting from "./longBreakSetting";
import style from "@/component/Setting/Setting.module.css";
import "react-tabs/style/react-tabs.css";
type SettingType={
  onClose:()=>void;
}
const SettingComponent = ({onClose}:SettingType) => {

  console.log("setting component " ,onClose)
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
          <WorkSetting onClose={onClose} />
        </TabPanel>
        <TabPanel
          className={style.customPanel}
          selectedClassName={`${style.customPanel} ${style.selectedPanel}`}
        >
          <ShortBreakSetting onClose={onClose} />
        </TabPanel>
        <TabPanel
          className={style.customPanel}
          selectedClassName={`${style.customPanel} ${style.selectedPanel}`}
        >
          <LongBreakSetting onClose={onClose} />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default SettingComponent;

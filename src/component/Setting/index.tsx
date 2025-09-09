import { Tabs,Tab,TabList,TabPanel } from "react-tabs";
import WorkSetting from "./workSetting";
import ShortBreakSetting from "./shortBreaksetting";
import LongBreakSetting from "./longBreakSetting";


const SettingComponent = () => {


  
  
  return (
    <>
    <Tabs>
      <TabList>
        <Tab>Work Setting</Tab>
        <Tab>Short Break</Tab>
        <Tab>Long Break</Tab>
      </TabList>
      <TabPanel><WorkSetting/></TabPanel>
      <TabPanel><ShortBreakSetting/></TabPanel>
      <TabPanel><LongBreakSetting/></TabPanel>
    </Tabs>
    </>
  );
};



export default SettingComponent

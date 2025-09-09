import { Tabs,Tab,TabList,TabPanel } from "react-tabs";
import WorkSetting from "./workSetting";


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
    </Tabs>
    </>
  );
};



export default SettingComponent

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Form from "./partials/form";
import ChangePassword from "./partials/changepassword"

export default function profile() {
  return (
    <div className="with-react-tabs main-content">
      <Tabs className="tabs-data">
        <TabList className="tabs">
          <Tab>Personal info</Tab>
          <Tab>Edit Profile</Tab>
          <Tab>Change Password</Tab>
        </TabList>
        <div className="vl"></div>
        <TabPanel>
          <div className="tab-content">
            <h2>My Profile</h2>
            <Form />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">
            <h2>Tab content 2</h2>
            <p>
              Here is your tab content. You can separate this as a component.
            </p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">
            <h2>Change Password</h2>
            <ChangePassword />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

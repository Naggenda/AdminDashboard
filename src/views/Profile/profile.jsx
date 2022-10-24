import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export default function profile() {
  return (
    <div className="with-react-tabs">

      <Tabs className="tabs-data">
        <TabList className="tabs">
          <Tab>Personal info</Tab>
          <Tab>Edit Profile</Tab>
          <Tab>Change Password</Tab>
        </TabList>

        <TabPanel>
          <div className="tab-content">
            <h2>My Profile</h2>
            <form>
                <div>
                  <label htmlFor="fullname">Full Name</label>
                  <input type="text" name="fullname"/>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email"/>
                </div>
                <div>
                  <label htmlFor="contact">Contact</label>
                  <input type="tel" name="contact"/>
                </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">
            <h2>Tab content 2</h2>
            <p>Here is your tab content. You can separate this as a component.</p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">
            <h2>Tab content 3</h2>
            <p>Here is your tab content. You can separate this as a component.</p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>
        </TabPanel>
      </Tabs>

    </div> 
  )
}
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import FirstTab from 'components/tabs/a';
import SecondTab from 'components/tabs/b';
import ThirdTab from 'components/tabs/c';

const styles = {
    tabUnselected : {
        fontSize: 21, padding: 15, fontWeight: 300, color :'#000'
    },
    tabSelected : {
        fontSize: 21, padding: 15, fontWeight: 'bold', color:'#0075c7'
    }
}
export default function HomeTemplate({
    selectedTab,
    onSelectTab
}) {
    return (
        <Tabs onSelect={ index => onSelectTab(index)}>
        <TabList>
          <Tab>
            <span style={selectedTab === 0? styles.tabSelected : styles.tabUnselected } > 검수 </span>
          </Tab>
          <Tab>
            <span style={selectedTab === 1? styles.tabSelected : styles.tabUnselected } > 전량 </span>
          </Tab>
          <Tab>
            <span style={selectedTab === 2? styles.tabSelected : styles.tabUnselected } > 검정 </span>
          </Tab>
        </TabList>

        <TabPanel>
            <FirstTab/>
        </TabPanel>


        <TabPanel>
            <SecondTab/>
        </TabPanel>


        <TabPanel>
            <ThirdTab/>
        </TabPanel>
      </Tabs>

    )
}
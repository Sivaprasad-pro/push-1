import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const MyTabs = ({ content }) => (
    <Tabs>
        <TabList>
            {
                (content.map((value, key) => (
                    <Tab>{value.title}</Tab>
                )))
            }

        </TabList>
        {
            (content.map((value, key) => (
                <TabPanel>
                    <div className='row' key={key}>
                        <div className='col-md-7 pe-0 pe-md-5'>
                            <p>{value.description}</p>
                        </div>
                        <div className='col-md-5 d-none d-sm-block'>
                            <img src={value.image.data.attributes.url} alt='image-vision' className='w-100 rounded-3' />
                        </div>
                    </div>

                </TabPanel>
            )))
        }
    </Tabs>
);

export default MyTabs;

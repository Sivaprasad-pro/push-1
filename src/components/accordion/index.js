
import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
// import 'react-light-accordion/demo/css/index.css';

const Accordions = ({ title, description }) => (
    <div>
        <Accordion atomic={true} >

            <AccordionItem title={title}>
                <p style={{ padding: '18px' }}>
                    {description}
                </p>
            </AccordionItem>

        </Accordion>
    </div>
);


export default Accordions;
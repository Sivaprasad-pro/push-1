'use client';
import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import Styles from "./style.module.css"
import Link from 'next/link';
import Rounded from '../../common/RoundedButton';
import { useScroll, useTransform, motion } from 'framer-motion';
import Accordions from '@/components/accordion';
import FeaturedNews from '@/components/insights/featured/featured-news';
import PressReleases from '@/components/insights/press-release/press-release';
import CaseStudies from '@/components/insights/case-studies/case-studies';


const index = () => {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);




    return (
        <div className={`${Styles['page_insights']}`}>
            <section className={`${Styles['section_top']} text-white`}>
                <div className='container d-flex h-100 align-items-end'>
                    <p className='m-0 pb-5 zindex2'>Home • Insights</p>
                </div>
            </section>

            <FeaturedNews />
            <PressReleases />
            <CaseStudies />





            <motion.div style={{ height }} className={Styles.circleContainer}>
                <div className={Styles.circle}></div>
            </motion.div>




        </div >
    )
}

export default index

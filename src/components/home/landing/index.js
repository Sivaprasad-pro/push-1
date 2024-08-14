"use client"
import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { Tilt } from 'react-tilt';
import Styles from './style.module.css';
import HomeButton from '@/common/RoundedButton/homeButton';
import Rounded from '@/common/RoundedButton';
import { slideInFromLeft } from '@/lib/motion';


export default function Landing() {
    return (
        <div className={`${Styles['blackhole_wrap']}`}>

            <motion.div initial="hidden" animate="visible" className={Styles.motion_wrap}>

                <section className={`${Styles.section1} text-center`}>

                    <video
                        src="https://res.cloudinary.com/dnzj2amhn/video/upload/v1720778193/KL_Web_Video_-_V2_ww0w1q.webm"
                        autoPlay
                        loop
                        muted
                        playsInline={true}
                        disableRemotePlayback={true}
                        className={`${Styles.intro_video}  d-none d-sm-block`}
                    />
                    <video
                        src="https://res.cloudinary.com/dnzj2amhn/video/upload/v1720778193/KL_Web_Video_-_V2_ww0w1q.webm"
                        autoPlay
                        muted
                        loop
                        playsInline={true}
                        disableRemotePlayback={true}
                        className={`${Styles.intro_video} ${Styles.intro_video2} d-block d-sm-none`}
                    />


                    <div className="w-100 z-2 position-absolute">
                        <Tilt
                            className={`${Styles['background-stripes']} background-stripes track-on-window text-center`}
                            perspective={1800}
                            scale={1}
                            trackOnWindow={true}
                            tiltReverse={true}
                            transitionSpeed={15000}
                            gyroscope={true}
                        >
                            <div className={`${Styles.title_wrap} w-100`}>
                                <motion.div variants={slideInFromLeft(0.5)}>
                                    <h1 className={`${Styles.title} ${Styles.t1} lh-1 m-0`}>
                                        Let&apos;s make
                                    </h1>
                                </motion.div>
                                <motion.div variants={slideInFromLeft(0.1)}>
                                    <div className="d-flex align-items-end">
                                        <h1 className={`${Styles.title} ${Styles.t2} lh-1 m-0 me-sm-5 me-0`}>great work</h1>
                                        {/* <span className="d-none d-sm-block">
                                            <HomeButton>
                                                <Link href="#" >Chat with us</Link>
                                            </HomeButton>
                                        </span> */}
                                    </div>
                                </motion.div>
                                <motion.div >
                                    <h1 className={`${Styles.title} ${Styles.t3} lh-1 m-0`}>together</h1>
                                </motion.div>
                                <span className="d-none mt-4">
                                    <HomeButton >
                                        <Link href="#" >Chat with us</Link>
                                    </HomeButton>
                                </span>
                            </div>
                        </Tilt>


                    </div>
                </section>

                <div data-scroll data-scroll-speed={0.1} className={Styles.button_down_wrap}>
                    <Rounded className={Styles.button_down}>
                        <p><svg xmlns="http://www.w3.org/2000/svg" fill="ffffff" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                        </p>
                    </Rounded>
                </div>

            </motion.div>

        </div >
    )
}

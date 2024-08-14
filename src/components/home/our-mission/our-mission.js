"use client";

import React, { useRef, useState } from 'react';
import Styles from '../landing/style.module.css';
import Link from 'next/link';

export default function OurMission({ contents }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <section className={`${Styles.section4} ${Styles.zindex2} text-center text-white`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <div className={`${Styles.mission_wrap} text-start p-sm-5 p-4`}>
                            <h1 className={`${Styles.title} pb-3`}>{contents.title}</h1>
                            <p className="mb-4">
                                {contents.description}
                            </p>
                            <Link href="#" className={Styles.links}>Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-8 d-none d-md-block">
                        <div className={`${Styles.video_wrap} h-100`}>
                            <video
                                ref={videoRef}
                                className={Styles.video}
                                poster={contents.thumbnail.data.attributes.url}
                                playsInline
                                onClick={handlePlayPause}
                            >
                                <source src={contents.video.data.attributes.url} type="video/mp4" />
                                <source src={contents.video.data.attributes.url} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                            <div className={Styles.controls}>
                                <button onClick={handlePlayPause} className={`${isPlaying ? Styles.pauseButton : Styles.playButton} ${Styles.playPauseButton}`}>
                                    {isPlaying ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

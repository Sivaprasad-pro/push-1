'use client';
import React, { useRef, useEffect, useState } from 'react';
import Styles from './style.module.css';
import MyTabs from '@/components/Tabs';
import Link from 'next/link';
import CountUp from 'react-countup';
import { useScroll, useTransform, motion } from 'framer-motion';
import Rounded from '@/common/RoundedButton';
import Clients from '@/components/home/clients';
import dynamic from 'next/dynamic';
import Team from '@/components/about/team/team';
import Talk from '@/components/about/talk/talk';
import axios from 'axios';

const Milestone = dynamic(() => import('@/components/Milestone'), { ssr: false });

const Index = () => {
    const container = useRef();
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        const params = {
            populate: {
                seo: '*',
                Counters: { populate: '*' },
                Mission_and_vision: { populate: 'image' },
                Leaders: { populate: 'media' },
                leaders_talk: { populate: '*' },
            },
        };
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
                    },
                    params: params,
                });
                const data = response.data.data.attributes;
                setAboutData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    const parseValue = (str) => {
        const match = str.match(/^(\d+)K$/);
        if (match) {
            return Number(match[1]);
        }
        return Number(str);
    };

    const extractLetters = (str) => {
        const match = str.match(/[a-zA-Z]+/);
        return match ? match[0] : '';
    };

    return (
        <div className={`${Styles['page_about']}`}>
            <section className={`${Styles['section_top']} text-white`}>
                <div className="container d-flex h-100 align-items-end">
                    <p className="m-0 pb-5 zindex2"><Link href="/" className='text-decoration-none text-white'>Home </Link> • About</p>
                </div>
            </section>
            <div className={`${Styles['team']}`}>
                <img src="./images/team.jpg" className="w-100" />
            </div>
            <section className={`${Styles['section1']} bg-black text-white`}>
                <div className="container zindex2">
                    <h5 className={`${Styles['title']}`}>Our Process</h5>
                    <div className="row">
                        <div className="col">
                            <div className={`${Styles['process_box']} rounded-4 mb-3 mb-md-0`}>
                                <div className={`${Styles['num']} display-6`}>01</div>
                                <h4 className="fw-bold">Discovery and Consultation</h4>
                                <p>Welcome to our blog! Here, we explore the latest trends and innovations in technology, offering expert insights and practical tips.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${Styles['process_box']} rounded-4 mb-3 mb-md-0`}>
                                <div className={`${Styles['num']} display-6`}>02</div>
                                <h4 className="fw-bold">Planning and <br />Proposal</h4>
                                <p>Welcome to our blog! Here, we explore the latest trends and innovations in technology, offering expert insights and practical tips.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${Styles['process_box']} rounded-4 mb-3 mb-md-0`}>
                                <div className={`${Styles['num']} display-6`}>03</div>
                                <h4 className="fw-bold">Design and Development </h4>
                                <p>Welcome to our blog! Here, we explore the latest trends and innovations in technology, offering expert insights and practical tips.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${Styles['process_box']} rounded-4 mb-3 mb-md-0`}>
                                <div className={`${Styles['num']} display-6`}>04</div>
                                <h4 className="fw-bold">Testing and Quality Assurance </h4>
                                <p>Welcome to our blog! Here, we explore the latest trends and innovations in technology, offering expert insights and practical tips.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${Styles['process_box']} rounded-4 mb-3 mb-md-0`}>
                                <div className={`${Styles['num']} display-6`}>05</div>
                                <h4 className="fw-bold">Deployment and Support</h4>
                                <p>Deploy solutions seamlessly, provide comprehensive training, and offer ongoing support for continuous success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${Styles['section2']} bg-black text-white d-none d-sm-block`}>
                <div className="container zindex2">
                    <h5 className={`${Styles['title']}`}>Koncepts Lab Journey</h5>
                    <Milestone />
                </div>
            </section>

            <section className={`${Styles['section6']} bg-black text-white`}>
                <div className="container zindex2">
                    <div className="row">
                        {aboutData && aboutData.Counters && aboutData.Counters.map((value, key) => (
                            <div className="col-6 col-md-6 col-lg-3 text-center" key={key}>
                                <div className={`${Styles['counter_wrap']} px-3 py-5 rounded-3 mb-3 mb-lg-0`}>
                                    <h1 className="display-4 fw-bold text-white">
                                        <CountUp
                                            end={parseValue(value.description)}
                                            enableScrollSpy={true}
                                            delay={1}
                                            duration={10}
                                        >
                                            {value.description}
                                        </CountUp>
                                        {extractLetters(value.description)}+
                                    </h1>
                                    <small className="text-uppercase">{value.title}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${Styles['section3']} bg-black text-white`}>
                <div className="container zindex2">
                    <h5 className={`${Styles['title']} text-white`}>Koncepts Lab At a Glance</h5>
                    {aboutData && <MyTabs content={aboutData.Mission_and_vision} />}
                </div>
            </section>

            <section className={`${Styles['section4']} bg-black text-white d-none`}>
                <div className="container zindex2 text-center">
                    <div className="col-md-6 m-auto">
                        <h5 className={`${Styles['title']} text-white text-center`}>Our Brands</h5>
                        <div className={`${Styles['kodifine_wrap']} p-5 rounded-5`}>
                            <img src="./graphics/kodifine.svg" alt="kodifine-logo" />
                            <p className="mt-3">
                                Koncepts Lab operates at the bleeding edge of AI, Data, Customer Experience (CX), and Platforms. We help enterprises rethink technology transformation, redefine processes, and thereby reimagine business models to create new performance frontiers.
                            </p>
                            <Link href="#" className="d-inline-block d-sm-flex justify-content-center text-decoration-none text-dark w-auto">
                                <Rounded>
                                    <p className="m-0">Start Career</p>
                                </Rounded>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${Styles['section7']} bg-black text-white pb-5 pb-md-0`}>
                <div className="container zindex2">
                    <div className={`${Styles['award_wrap']} row rounded-4 p-5 align-items-center`}>
                        <h5 className={`${Styles['title']}`}>Kerala Brand <br />Leadership<br /> Awards 2023</h5>
                        <div className="col-md-12 m-auto text-center">
                            <img src="./images/award.png" alt="award-image" className="w-100" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${Styles['section8']} bg-black text-white d-none d-md-block`}>
                <div className="container zindex2">
                    <div className="row">
                        <div className="col-md-5 d-none d-md-block">
                            <img src="./images/digital.png" alt="promises-image" className="h-100" />
                        </div>
                        <div className="col-md-7">
                            <h5 className={`${Styles['title']}`}>Assurances Delivered</h5>
                            <p>
                                Partner with us to benefit from our extensive industry expertise, innovative solutions, and customer-focused approach. Together, we'll help your business achieve its goals and flourish in a competitive market.
                            </p>
                            <p>
                                Partner with us to benefit from our extensive industry expertise, innovative solutions, and customer-focused approach. Together, we'll help your business achieve its goals and flourish in a competitive market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {aboutData && <Team content={aboutData.Leaders} />}
            {aboutData && <Talk content={aboutData.leaders_talk} />}

            <Clients title="Accolades and Partnership" />

            <motion.div style={{ height }} className={Styles.circleContainer}>
                <div className={Styles.circle}></div>
            </motion.div>
        </div>
    );
};

export default Index;

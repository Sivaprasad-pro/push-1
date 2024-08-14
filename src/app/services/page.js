'use client';
import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import Styles from "./style.module.css"
import Link from 'next/link';
import Rounded from '../../common/RoundedButton';
import { useScroll, useTransform, motion } from 'framer-motion';
import Accordions from '@/components/accordion';
import HireUs from '@/components/services/hire-us/hire-us';



const digital = [
    {
        title: "Application Modernization",
        description: "Legacy applications can hinder your agility. Koncepts Lab modernizes your applications to leverage the latest technologies, improve performance, and ensure scalability for future growth. We offer a range of solutions, from modernization roadmaps to cloud-native development, to keep your applications competitive in the global marketplace.",
    },
    {
        title: "DevOps and Agile",
        description: "Koncepts Lab helps you bridge the gap between development and operations. We implement DevOps practices and Agile methodologies to streamline workflows, shorten development cycles, and deliver high-quality software faster. This approach allows you to adapt to changing market demands and stay ahead of the competition globally.",
    },
    {
        title: "API & Microservices",
        description: "Koncepts Lab architects robust APIs and microservices to facilitate seamless communication between your applications and data sources. This approach fosters flexibility, scalability, and faster development cycles, allowing you to adapt your solutions to meet the unique needs of your global audience.",
    },
    {
        title: "Hyperscaler Cloud Migration",
        description: "Leverage the power of leading cloud platforms (e.g., AWS, Azure, GCP) to optimize your infrastructure costs, enhance scalability, and improve disaster recovery. Koncepts Lab guides you through the entire cloud migration process, ensuring a smooth transition and maximizing your cloud investment's global reach.",
    },
    {
        title: "Products and Platforms",
        description: "Koncepts Lab delivers innovative software products and platforms tailored to your specific business needs. Our team of skilled developers leverages the latest technologies to create solutions that address your global market challenges and opportunities.",
    },
    {
        title: "Cybersecurity",
        description: "Koncepts Lab understands the critical importance of cybersecurity in today's digital world. We offer a range of services, including vulnerability assessments, penetration testing, and security awareness training, to safeguard your data and infrastructure from cyber threats, ensuring global security compliance.",
    },
    {
        title: "Staff Augmentation",
        description: "Koncepts Lab provides experienced IT professionals to augment your existing team. We offer a variety of staffing models, from dedicated developers to project-based teams, to ensure you have the expertise needed to execute your digital strategies successfully, regardless of your location.",
    },
];
const ai = [
    {
        title: "GenAI",
        description: "Koncepts Lab leverages cutting-edge Generative AI (GenAI) technologies like Natural Language Processing (NLP) and computer vision to create innovative solutions. We can help you automate content creation, personalize customer experiences, and develop intelligent applications that address your specific global market needs.",
    },
    {
        title: "Machine Learning",
        description: "Koncepts Lab empowers your business with custom Machine Learning (ML) solutions. We extract valuable insights from your data to optimize operations, predict customer behavior, and make data-driven decisions that fuel global growth. Our team of ML engineers can build intelligent systems that adapt to your evolving needs in any market.",
    },
    {
        title: "Data Analytics",
        description: "Koncepts Lab helps you unlock the hidden potential of your data. We offer a comprehensive suite of data analytics services, from data collection and cleaning to visualization and reporting. We empower you to gain a deep understanding of your global customer base, identify trends, and make informed decisions that drive success across international markets.",
    },

];
const cx = [
    {
        title: "SEO",
        description: "Koncepts Lab optimizes your website and content for search engines, ensuring your brand is visible to your target audience in every market. We implement best practices for multilingual SEO, considering local search trends and user intent to drive organic traffic and qualified leads from around the world.",
    },
    {
        title: "Social Media Marketing",
        description: "Koncepts Lab crafts social media strategies tailored to each target market. We understand the unique cultural landscape of different platforms and create content that resonates with your global audience. We help you build brand awareness, generate leads, and foster meaningful customer interactions across borders.",
    },
    {
        title: "Content Marketing",
        description: "Koncepts Lab develops compelling content strategies that attract and educate your global audience. We create content that caters to local preferences and languages, addressing the specific needs and challenges of your target markets. Our content marketing solutions help you establish thought leadership, build trust, and drive conversions internationally.",
    },
    {
        title: "2D/3D Animation",
        description: "Koncepts Lab creates high-quality 2D and 3D animations that transcend language barriers. We use animation to explain complex concepts, showcase products in a visually appealing way, and tell stories that resonate with a global audience. Our animations are culturally sensitive and effective in capturing attention across markets.",
    },
    {
        title: "AR, VR, and XR",
        description: "Koncepts Lab leverages Augmented Reality (AR), Virtual Reality (VR), and Extended Reality (XR) technologies to create interactive experiences that engage your global audience. We develop culturally sensitive XR experiences that educate, entertain, and leave a lasting impression on users around the world.",
    },
];




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
        <div className={`${Styles['page_services']}`}>
            <section className={`${Styles['section_top']} text-white`}>
                <div className='container d-flex h-100 align-items-end'>
                    <p className='m-0 pb-5 zindex2'>Home • Services</p>
                </div>
            </section>



            <section className={`${Styles['section1']} bg-black text-white`}>
                <div className='container zindex2'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h5 className={`${Styles['title']}`}>Digital</h5>
                            <p>Streamline your operations and empower innovation with our strategic digital transformation solutions.</p>
                            <p>In today's dynamic business landscape, staying ahead of the curve is crucial. Koncepts Lab helps you navigate the digital transformation journey, from strategy development to implementation. We craft customized solutions to optimize your processes, enhance customer experiences, and unlock new growth opportunities.
                            </p>
                            <div className='row'>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c1.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c2.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c3.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c4.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c5.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c6.svg' /></div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            {
                                digital.map((value) => (
                                    <Accordions title={value.title} description={value.description} />
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>

            <section className={`${Styles['section2']} bg-black text-white`}>
                <div className='container zindex2'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h5 className={`${Styles['title']}`}>AI</h5>
                            <p>Koncepts Lab doesn't just offer AI solutions, we equip you with the power of intelligent decision-making across borders. We leverage cutting-edge AI technologies like Machine Learning and Generative AI to unlock hidden insights from your data, regardless of language or origin.</p>
                            <div className='row'>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c1.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c2.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c3.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c4.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c5.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c6.svg' /></div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            {
                                ai.map((value) => (
                                    <Accordions title={value.title} description={value.description} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${Styles['section3']} bg-black text-white`}>
                <div className='container zindex2'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h5 className={`${Styles['title']}`}>CX</h5>
                            <p>Koncepts Lab helps you design and implement customer experiences (CX) that delight and engage your audience across international markets. We take a holistic approach, considering cultural nuances and user behavior to build seamless experiences that foster brand loyalty and drive global growth.</p>
                            <div className='row'>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c1.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c2.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c3.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c4.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c5.svg' /></div>
                                <div className='col-6 col-md-4 text-center p-2 p-md-4'><img src='./graphics/c6.svg' /></div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            {
                                cx.map((value) => (
                                    <Accordions title={value.title} description={value.description} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${Styles['section4']} bg-black text-white`}>
                <div className='container zindex2'>
                    <h1 className={`${Styles.title} pb-3`}>Explore Our Products</h1>
                    <div className='row'>
                        <div className="col-lg-4 mb-3 mb-lg-0">
                            <div className={`${Styles.products_wrap} text-start p-sm-5 p-4`}>
                                <h1 className={`${Styles.title2} pb-3`}>HRMS tool</h1>
                                <p className="mb-3">Keeping the user at the centre, leapfrog with a clear AI-first, Cloud-first, Data-first posture. Become our customers' trusted technology custodian with cyber resilience.</p>
                                <p className="mb-4">Deliver value at scale by underpinning a stable digital core. Keeping the user at the centre, leapfrog with a clear AI-first, Cloud-first, Data-first posture. Become our customers'</p>
                                <Link href="#" className='d-inline-block d-sm-flex justify-content-start text-decoration-none text-dark w-auto'>
                                    <Rounded>
                                        <p className='m-0'>Know More</p>
                                    </Rounded>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <img src='./images/hrms.webp' className='w-100 rounded-4' alt='hrms' />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${Styles['section5']} bg-black text-white`}>
                <div className='container zindex2'>
                    <div className='row'>
                        <div className="col-lg-4 mb-3 mb-lg-0">
                            <div className={`${Styles.products_wrap} text-start p-sm-5 p-4`}>
                                <h1 className={`${Styles.title2} pb-3`}>Project Management Tool</h1>
                                <p className="mb-3">Keeping the user at the centre, leapfrog with a clear AI-first, Cloud-first, Data-first posture. Become our customers' trusted technology custodian with cyber resilience.</p>
                                <p className="mb-4">Deliver value at scale by underpinning  </p>
                                <Link href="#" className='d-inline-block d-sm-flex justify-content-start text-decoration-none text-dark w-auto'>
                                    <Rounded>
                                        <p className='m-0'>Know More</p>
                                    </Rounded>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <img src='./images/pm.png' className='w-100 rounded-4' alt='Project Managment' />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${Styles['section6']} bg-black text-white`}>
                <div className='container zindex2'>
                    <div className='row'>
                        <div className="col-lg-4 mb-3 mb-lg-0">
                            <div className={`${Styles.products_wrap} text-start p-sm-5 p-4`}>
                                <h1 className={`${Styles.title2} pb-3`}>CMS (Campus management system)</h1>
                                <p className="mb-3">Keeping the user at the centre, leapfrog with a clear AI-first, Cloud-first, Data-first posture. Become our customers' trusted technology custodian with cyber resilience.</p>
                                <Link href="#" className='d-inline-block d-sm-flex justify-content-start text-decoration-none text-dark w-auto'>
                                    <Rounded>
                                        <p className='m-0'>Know More</p>
                                    </Rounded>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <img src='./images/cms.jpeg' className='w-100 rounded-4' alt='CMS' />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${Styles['section7']}  text-white`}>
                <div className='container zindex2'>
                    <div className='row'>
                        <div className="col-lg-4 mb-3 mb-lg-0">
                            <div className={`${Styles.products_wrap} text-start p-sm-5 p-4`}>
                                <h1 className={`${Styles.title2} pb-3`}>ERP</h1>
                                <p className="mb-3">Keeping the user at the centre, leapfrog with a clear AI-first, Cloud-first, Data-first posture. Become our customers' trusted technology custodian with cyber resilience.</p>
                                <p className="mb-4">nning a stable digital core. Keeping the user at the centre, leapfrog with a clear AI-first, Cloud-first, Data-first posture. Become our customers'</p>
                                <Link href="#" className='d-inline-block d-sm-flex justify-content-start text-decoration-none text-dark w-auto'>
                                    <Rounded>
                                        <p className='m-0'>Know More</p>
                                    </Rounded>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <img src='./images/erp.png' className='w-100 rounded-4' alt='ERP' />
                        </div>
                    </div>
                </div>
            </section>

            {/* <HireUs /> */}


            <motion.div style={{ height }} className={Styles.circleContainer}>
                <div className={Styles.circle}></div>
            </motion.div>




        </div >
    )
}

export default index

import React from 'react';
import dynamic from 'next/dynamic';
import Styles from './style.module.css';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function CaseStudies() {
    const hideData = [
        {
            id: "1",
            image: "./images/cs1.png",
            title: "Chrysalis Mercury",
            url: "./files/KL - CM CASE STUDY.pdf",
        },
        {
            id: "2",
            image: "./images/cs2.png",
            title: "Reinvent & More ",
            url: "./files/KL - R&M CASE STUDY.pdf",
        },
        {
            id: "3",
            image: "./images/cs3.png",
            title: "Traydstream",
            url: "./files/KL - TS CASE STUDY.pdf",
        },
        {
            id: "4",
            image: "./images/cs4.png",
            title: ":Kriips",
            url: "./files/KL - KRPS CASE STUDY.pdf",
        },

    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className={`${Styles['section_case_studies']}  text-white`}>
            <div className='container zindex2'>
                <h1 className={`${Styles.title} pb-3`}>Case studies</h1>

                <Slider {...settings}>
                    {hideData.map((value) => (
                        <div key={value.id}>
                            <div className={`${Styles['case_wrap']}`}>

                                <div className={`${Styles['image']} mb-3`}><img src={value.image} className='w-100' /></div>
                                <h4 className={`${Styles.title2} fw-bold`}>{value.title}</h4>
                                <Link href={value.url} target='_blank' className={`${Styles['read']} text-decoration-none`}>
                                    Read more
                                </Link>

                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

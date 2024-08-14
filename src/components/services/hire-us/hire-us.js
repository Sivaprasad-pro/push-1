import React from 'react';
import dynamic from 'next/dynamic';
import Styles from './style.module.css';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function HireUs() {
    const hideData = [
        {
            id: "1",
            icon: ["../../graphics/it-1.svg"],
            iconData: ["Tailored to Your Specific Needs"],
            title: "Customized IT staff augmentation",
            description: "An exceptional software engineer must possess raw technical skills. However, becoming an efficient developer involves more than just technical..."
        },
        {
            id: "2",
            icon: ["../../graphics/it-2.svg"],
            iconData: ["Flexible Engagement Models"],
            title: "Conventional team augmentation",
            description: "An exceptional software engineer must possess raw technical skills. However, becoming an efficient developer involves more than just technical..."
        },
        {
            id: "3",
            icon: ["../../graphics/it-1.svg"],
            iconData: ["Tailored to Your Specific Needs"],
            title: "Managed recruitment and augmentation",
            description: "An exceptional software engineer must possess raw technical skills. However, becoming an efficient developer involves more than just technical..."
        },
        {
            id: "4",
            icon: ["../../graphics/it-2.svg"],
            iconData: ["Flexible Engagement Models"],
            title: "Web maintenance and support",
            description: "An exceptional software engineer must possess raw technical skills. However, becoming an efficient developer involves more than just technical..."
        },
        {
            id: "5",
            icon: ["../../graphics/it-1.svg"],
            iconData: ["Tailored to Your Specific Needs"],
            title: "Complete project outsourcing",
            description: "An exceptional software engineer must possess raw technical skills. However, becoming an efficient developer involves more than just technical..."
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
        <section className={`${Styles['section_hireus']} text-white`}>
            <div className='container zindex2'>
                <h1 className={`${Styles.title} pb-3`}>Hire Us</h1>

                <Slider {...settings}>
                    {hideData.map((value) => (
                        <div key={value.id}>
                            <div className={`${Styles['hire_wrap']}`}>

                                <div className={`${Styles['icon']} mb-3`}><img src={value.icon} /></div>
                                <h4 className={`${Styles.title2} fw-bold`}>{value.title}</h4>
                                <p className="">{value.description}</p>
                                <Link href="#" className={`${Styles['quote']} text-decoration-none`}>
                                    Get a Quote
                                </Link>

                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

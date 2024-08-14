import React from 'react';
import dynamic from 'next/dynamic';
import Styles from './style.module.css';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function PressReleases() {
    const hideData = [
        {
            id: "1",
            image: "https://konceptslab.com/assets/img/articles/human-vs-ai-generated-blogs-why-real-people-still-rule-seo.jpeg",
            date: "10-July-2024",
            title: "Human vs. Ai Generated Blogs: Why Real People Still Rule SEO",
            description: "The SEO landscape is constantly evolving, but one thing remains constant: high-quality content is king. While AI content generation tools are becoming "
        },
        {
            id: "2",
            image: "https://konceptslab.com/assets/img/articles/ihm-2.png",
            date: "10-July-2024",
            title: "Elevating Brand Awareness for Institute of Health & Management ",
            description: "Institute of Health & Management (IHM) Australia has been a trailblazer in providing top-tier healthcare and nursing education since its inception in 2012."
        },
        {
            id: "3",
            image: "https://konceptslab.com/assets/img/the-unavoidable-investment-your-company-can%E2%80%99t-afford-to-ignore.png",
            date: "10-July-2024",
            title: "The unavoidable investment your company can’t afford to ignore",
            description: "In the ruthless battlefield of the business world, your brand is your armor, your sword, and your shield. It's your identity, your reputation, and your promise. "
        },
        {
            id: "4",
            image: "https://konceptslab.com/assets/img/articles/article4/gpt.jpg",
            date: "10-July-2024",
            title: "The power of Minimalistic AdsBrand Widely Boost Wisely",
            description: "Can you consider not using GPT for creating long-form content such as blog posts, emails, letters, and website content? Prior to the emergence "
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
        <section className={`${Styles['section_press_releases']} bg-black text-white`}>
            <div className='container zindex2'>
                <h1 className={`${Styles.title} pb-3`}>Press Releases</h1>

                <Slider {...settings}>
                    {hideData.map((value) => (
                        <div key={value.id}>
                            <div className={`${Styles['press_wrap']}`}>

                                <div className={`${Styles['image']} mb-3`}><img src={value.image} className='w-100' /></div>
                                <small>{value.date}</small>
                                <h4 className={`${Styles.title2} fw-bold`}>{value.title}</h4>
                                <p className="">{value.description}</p>
                                <Link href="#" className={`${Styles['read']} text-decoration-none`}>
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

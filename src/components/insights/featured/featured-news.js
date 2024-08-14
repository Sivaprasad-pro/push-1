import React from 'react';
import dynamic from 'next/dynamic';
import Styles from './style.module.css';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function FeaturedNews() {
    const hideData = [
        {
            id: "1",
            image: "https://konceptslab.com/assets/img/articles/KL-FEB-24-P8%20blog.jpg",
            date: "10-July-2024",
            title: "Mastering the Art of Strategic Alchemy. ",
            description: "In the ever-evolving landscape of contemporary business, the decision to outsource brand consulting and creative services is more than a mere transaction. "
        },
        {
            id: "2",
            image: "https://konceptslab.com/assets/img/articles/how-to-use-ai-properly-in-the-it-field.jpg",
            date: "10-July-2024",
            title: "How to use AI properly in the IT field",
            description: "Nowadays, Artificial Intelligence (AI) has become the cornerstone of modern Information Technology (IT) in several ways. It has the potential"
        },
        {
            id: "3",
            image: "https://konceptslab.com/assets/img/articles/What-soft-skills-are-essential-for-todays-developer.png",
            date: "10-July-2024",
            title: "What soft skills are essential for today's developers?",
            description: "An exceptional software engineer must possess raw technical skills. However, becoming an efficient developer involves more than just technical."
        },
        {
            id: "4",
            image: "https://konceptslab.com/assets/img/articles/The-AI-Apocalypse-is-Real-But-So-Is-Your-Potential.jpg",
            date: "10-July-2024",
            title: "The AI Apocalypse is Real, But So Is Your Potential",
            description: "It's 2024, and artificial intelligence (AI) is no longer a science fiction fantasy. It's here, it's rapidly advancing, and it's transforming"
        },
        {
            id: "5",
            image: "https://konceptslab.com/assets/img/articles/reinvent-more-redefines-recruitment-excellence.jpg",
            date: "10-July-2024",
            title: "Reinvent & More Redefines Recruitment Excellence",
            description: "n today's competitive business environment, attracting and retaining top human capital is crucial for organizational growth and success. "
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
        <section className={`${Styles['section_featured_news']} bg-black text-white`}>
            <div className='container zindex2'>
                <h1 className={`${Styles.title} pb-3`}>Featured news and updates</h1>

                <Slider {...settings}>
                    {hideData.map((value) => (
                        <div key={value.id}>
                            <div className={`${Styles['featured_wrap']}`}>

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

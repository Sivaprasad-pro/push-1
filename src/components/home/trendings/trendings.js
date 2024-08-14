import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Styles from './style.module.scss';
import Link from 'next/link';
import Rounded from '@/common/RoundedButton';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function Trending() {
    const [trending, setTrending] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    sort: 'rank:asc',
                    'pagination[limit]': 6,
                };
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
                    },
                    params: params,
                });
                const data = response.data.data;
                setTrending(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch projects", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

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

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
    };

    return (
        <section className={`${Styles['section_trending']}`}>
            <div className="container">
                <h1 className={`${Styles['title']}`}>Trending Now</h1>
                <p className='col-md-5 m-0'>Welcome to our blog! Here, we explore the latest trends and innovations in technology, offering expert insights and practical tips.</p>
                <Link href="#" className='d-inline-block text-decoration-none text-dark my-4'>
                    <Rounded>
                        <p className='m-0'>Read all articles</p>
                    </Rounded>
                </Link>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <Slider {...settings}>
                        {trending.map((value) => (
                            <div key={value.id}>
                                <div className={`${Styles.blog_card} p-4`}>
                                    <small>{value.attributes.posted_by} &bull; {new Date(value.attributes.publishedAt).toLocaleDateString()}</small>
                                    <h4 className={`${Styles['title']} mt-3`}>
                                        {value.attributes.title}
                                    </h4>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: truncateDescription(value.attributes.blog, 50),
                                        }}
                                    />
                                    <Link href="#" className={Styles.more}>
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </section>
    );
}

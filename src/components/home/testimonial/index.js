"use client";
import React, { useState, useEffect } from 'react';
import Styles from "./style.module.css";
import Link from 'next/link';
import Rounded from '@/common/RoundedButton';
import axios from 'axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    populate: '*',
                    sort: 'rank:asc',
                    'pagination[limit]': 3,
                };
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
                    },
                    params: params,
                });
                const data = response.data.data;
                setTestimonials(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch projects", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <section className={`${Styles['section_testimonials']} d-none d-sm-block`}>
                <div className='container'>
                    <div className='row'>
                        <h1 className={`${Styles['title']}`}>Testimonials</h1>
                        <div>
                            <p className='col-md-5 m-0'>
                                Discover how Konceptslab has helped others achieve their goals. See real stories about how Konceptslab overcame challenges
                            </p>
                        </div>

                        <Link href="#" className='d-inline-block text-decoration-none text-dark my-4 w-auto'>
                            <Rounded>
                                <p className='m-0'>Read all Testimonials</p>
                            </Rounded>
                        </Link>
                    </div>

                    <div className='row'>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            testimonials.map((value, key) => (
                                <div className='col-md-4 mb-3' key={key}>
                                    <div className={`${Styles['testimonial_wrap']} overflow-hidden`}>
                                        <div className={`${Styles['logos']} px-4 py-3 mb-3`} style={{ backgroundColor: '#ffcda9a1' }}>
                                            <img src={value.attributes.logo.data.attributes.url} alt={value.attributes.name} />
                                        </div>
                                        <p className={`${Styles['content']} px-4`}>
                                            {value.attributes.testimonial}
                                        </p>
                                        <h6 className={`${Styles['auth']} px-4 mb-4`}>{value.attributes.name}</h6>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonials;

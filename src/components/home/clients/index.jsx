'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './style.module.scss';
import Rounded from '@/common/RoundedButton';
import Link from 'next/link';
import { useScroll, useTransform, motion } from 'framer-motion';
import axios from 'axios';

export default function Clients({ title = "We Cherish Our Customers" }) {
    const container = useRef();
    const [clientsData, setClientsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    populate: '*',
                    sort: 'rank:asc',
                    'pagination[limit]': 16,
                };
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/clients`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
                    },
                    params: params,
                });
                const data = response.data.data;
                setClientsData(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch clients", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div ref={container}>
                <section className={`${styles['clients']} d-none d-sm-block`}>
                    <div className='container'>
                        <div className='row'>
                            <h1 className={`${styles['title']} text-center mb-5`}>
                                {title}
                            </h1>
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : (
                                clientsData.map((client, index) => (
                                    <div key={index} className='col-4 col-md-3 text-center border-end-2 border-bottom-2'>
                                        <img src={client.attributes.logo.data.attributes.url} alt={`Client ${index + 1}`} />
                                    </div>
                                ))
                            )}
                        </div>
                        <Link href="#" className='d-flex justify-content-center text-decoration-none text-dark w-auto mt-5'>
                            <Rounded>
                                <p className='m-0'>View more</p>
                            </Rounded>
                        </Link>
                    </div>
                </section>

                <motion.div style={{ height }} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
            </div>
        </>
    );
}

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import OwlPortfolio from './owl/owl-portfolio';
import Link from 'next/link';
import horizontalLoop from '@/lib/horizontalLoop';
import { Observer } from 'gsap/Observer';
import gsap from 'gsap';
import axios from 'axios';

export default function Portfolio() {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [portfolio, setPortfolio] = useState([]);
    const container = useRef();

    useLayoutEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    populate: '*',
                    sort: 'rank:asc',
                    'pagination[limit]': 4,
                };
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
                    },
                    params: params,
                });
                const data = response.data.data;
                setPortfolio(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch portfolio", error);
                setIsLoading(false); // Stop loading on error
            }
        };

        fetchData();
    }, []);

    useLayoutEffect(() => {
        if (!portfolio.length || !container.current) return; // Skip if no portfolio data or container is not available

        const speed = 2.5;
        const loop = horizontalLoop('.portfolio', {
            repeat: -1,
            speed: 1.5,
            paddingRight: 16,
        });

        let tl;

        Observer.create({
            target: window,
            type: 'wheel',
            onChangeY: (self) => {
                tl && tl.kill();
                const factor = self.deltaY > 0 ? 1 : -1;
                tl = gsap
                    .timeline()
                    .to(loop, { timeScale: speed * factor, duration: 0.25 })
                    .to(loop, { timeScale: 1 * factor, duration: 1 });
            },
        });

    }, [portfolio]);

    return (
        <main>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {isMobile ? (
                        <OwlPortfolio values={portfolio} />
                    ) : (
                        <div className="loop_wrap" ref={container}>
                            {portfolio.length > 0 ? (
                                portfolio.map((value, key) => (
                                    <div key={key} className="portfolio">
                                        <img src={value.attributes.thumbnail.data.attributes.url} alt={value.attributes.title || 'Portfolio Image'} />
                                        <div className="details">
                                            <h1>{value.attributes.project_name || 'No Title'}</h1>
                                            <Link href={value.attributes.project_url || '#'}>Visit</Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No portfolio items available.</p>
                            )}
                        </div>
                    )}
                </>
            )}
        </main>
    );
}

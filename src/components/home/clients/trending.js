import React from 'react'
import Styles from './style.module.scss'
import Link from 'next/link';
import Owl from '../Owl';
import Rounded from '../../common/RoundedButton';
export default function Trending() {
    const bannerData = [
        { id: 1, author: "Koncepts Lab", date: "12 June 2024", title: "What soft skills are essential for today's dev..", description: "An exceptional software engineer must possess raw technical skills. However, becoming an efficient developer involves more than just technical..." },
        { id: 2, author: "Koncepts Lab", date: "11 June 2024", title: "Reinvent & More Redefines Recruitment Excellence", description: "In today's competitive business environment, attracting and retaining top human capital is crucial for organizational growth and success..." },
        { id: 3, author: "Koncepts Lab", date: "10 June 2024", title: "The AI Apocalypse is Real, But So Is Your Potential", description: "It's 2024, and artificial intelligence (AI) is no longer a science fiction fantasy. It's here, it's rapidly advancing, and it's transforming " },
        { id: 4, author: "Koncepts Lab", date: "9 June 2024", title: "How to Ensure Fairness in AI-Powered Software...", description: "In the realm of software development, the shift to AI-driven methods marks a groundbreaking evolution. This revolutionizes the process by ana..." },
        { id: 5, author: "Koncepts Lab", date: "8 June 2024", title: "The unavoidable investment your company", description: "In the ruthless battlefield of the business world, your brand is your armor, your sword, and your shield. It's your identity, your reputation, and your..." },
    ];


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
                <Owl values={bannerData} speed={5000} />
            </div>
        </section>
    )
}

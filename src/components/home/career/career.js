import Rounded from '@/common/RoundedButton';
import Link from 'next/link';
import React, { useRef } from 'react';
import styles from '../clients/style.module.scss';

export default function Career() {
    const container = useRef();
    return (
        <div ref={container} >


            <section className={`${styles['section_career']} d-none d-sm-block`}>
                <div className='container zindex2'>
                    <h1 className={`${styles['title']} text-center text-white mb-3`}>Discover Career Opportunities</h1>
                    <Link href="#" className='d-flex justify-content-center text-decoration-none text-dark w-auto'>
                        <Rounded>
                            <p className='m-0 text-decoration-none '>View openings</p>
                        </Rounded>
                    </Link>
                </div>
            </section>
        </div>
    )
}

import React from 'react';
import dynamic from 'next/dynamic';
import Styles from './style.module.css';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function Talk({ content }) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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

        <section className={`${Styles['section_talk']} bg-black text-white d-none d-md-block`}>
            <div className='container zindex2'>
                <h5 className={`${Styles['title']} text-white text-center`}>Leadership Talks</h5>
                <div className='row'>

                    <Slider {...settings}>
                        {content.map((value, key) => (
                            <div key={key}>
                                <div className={`${Styles['talk_wrap']}`}>
                                    <iframe width="100%" height="315" src={value.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>

                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </section>





    );
}

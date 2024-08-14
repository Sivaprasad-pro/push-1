import React from 'react';
import dynamic from 'next/dynamic';
import Styles from './style.module.css';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function Team({ content }) {


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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

        <section className={`${Styles['section9']} bg-black text-white d-none d-md-block`}>
            <div className='container zindex2'>
                <h5 className={`${Styles['title']} text-white text-center`}>Leadership Team</h5>
                <div className='row'>

                    <Slider {...settings}>
                        {content.map((value, key) => (
                            <div key={key}>

                                <div className={`${Styles['team_slider']}`}>
                                    <div className={`${Styles['item_group']} overflow-hidden position-relative rounded-3  mb-3`}>
                                        <div className={`${Styles['image_ps']}`}>
                                            <img src={value.media.data.attributes.url} alt={value.title} className="w-100" />

                                        </div>
                                        <div className={`${Styles['socials']}`}>
                                            <Link href={value.url}>
                                                <img src='./graphics/icon_linkedin.svg' />
                                            </Link>
                                        </div>
                                        <div className={`${Styles['content_txt']}`}>
                                            <h4>{value.title}</h4>
                                            <small>{value.description}</small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </section>





    );
}

"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OwlPortfolio = ({ values, speed = 4000 }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <Slider {...settings} className="loop_wrap2">
            {values.map((value, key) => (
                <div key={key} className="portfolio">
                    <img src={value.attributes.thumbnail.data.attributes.url} alt={value.attributes.title || 'Portfolio Image'} />
                    <div className="details">
                        <h1>{value.attributes.project_name || 'No Title'}</h1>
                        <Link href={value.attributes.project_url || '#'}>Visit</Link>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default OwlPortfolio;

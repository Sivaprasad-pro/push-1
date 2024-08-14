import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Styles from './style.module.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from 'next/link';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

class OwlWrapper extends Component {
    state = {
        values: this.props.values,
        speed: this.props.speed,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.values !== prevState.values || nextProps.speed !== prevState.speed) {
            return {
                values: nextProps.values,
                speed: nextProps.speed,
            };
        }
        return null;
    }

    render() {
        const { values, speed } = this.state;
        const options = {
            items: 3,
            nav: true,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: speed,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1024: { items: 3 },
            },
        };

        return (
            <OwlCarousel className="owl-theme" {...options}>
                {values.map((value) => (
                    <div key={value.id}>
                        <div className={`${Styles.blog_card} p-4`}>
                            <small>{value.author} &bull; {value.date}</small>
                            <h4 className={`${Styles['title']} mt-3`}>
                                {value.title}
                            </h4>
                            <p>
                                {value.description}
                            </p>
                            <Link href="#" className={Styles.more}>
                                Read more
                            </Link>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        );
    }
}

export default OwlWrapper;

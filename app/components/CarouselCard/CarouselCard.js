import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Slider from "react-slick";
import '../CommonStyle.css';
import { indices } from "../../utils/Constants"

gsap.registerPlugin(ScrollTrigger);

const IndexCard = ({ name, label, change, price }) => (
    <div className="index-card">
        <span className="index-symbol">{name}</span>
        <div className='index-description'>
            <div className='index-details'>
                <span className="index-value">{label}</span>
                <span className="index-tag">{change}</span>
            </div>
            <div className='index-details'>
                <span className="index-value">Index</span>
                <span className="index-price">{price}</span>
            </div>
        </div>
    </div>
);

const IndicesSection = () => {
    const settings = {
        infinite: true,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
        swipe: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const cardRefs = useRef([]);

    useEffect(() => {
        cardRefs.current.forEach((card, i) => {
            if (!card) return;

            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                }
            );
        });
    }, []);

    return (
        <div className="indices-container">
            <Slider {...settings}>
                {indices.map((symbol, index) => (
                    <div key={index} ref={el => cardRefs.current[index] = el}>
                        <IndexCard {...symbol} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default IndicesSection;

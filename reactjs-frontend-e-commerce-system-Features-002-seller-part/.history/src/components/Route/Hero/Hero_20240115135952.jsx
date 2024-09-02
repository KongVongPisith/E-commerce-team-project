import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/styles';

const Hero = () => {
    const [showVideo, setShowVideo] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        'https://themes.rslahmed.dev/rafcart/assets/images/banner-1.jpg',
        'https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg',
        'https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg',
    ];

    useEffect(() => {
        let timer;
        if (showVideo) {
            timer = setTimeout(() => setShowVideo(false), 2000); // Switch to slider after 2 seconds
        } else {
            timer = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            }, 3000); // Change slide every 3 seconds
        }

        return () => clearTimeout(timer);
    }, [showVideo, slides.length]);

    return (
        <div className={`relative min-h-[90vh] 800px:min-h-[90vh] w-full ${styles.normalFlex}`}>
            {showVideo ? (
                <video width="100%" height="100%" autoPlay muted loop>
                    <source src="path_to_your_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div
                    className="slider"
                    style={{ backgroundImage: `url(${slides[currentSlide]})` }}
                >
                    <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
                        <h1 className="text-[35px] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize">
                            Best Collection for Home Decoration
                        </h1>
                        <p className="pt-5 text-[16px] text-[#000000ba]">
                            Discover unique and inspiring designs to create the perfect ambiance in your home.
                        </p>
                        <Link to="/products" className="inline-block">
                            <div className={`${styles.button} mt-5`}>
                                <span className="text-[#fff] text-[18px]">Shop Now</span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;

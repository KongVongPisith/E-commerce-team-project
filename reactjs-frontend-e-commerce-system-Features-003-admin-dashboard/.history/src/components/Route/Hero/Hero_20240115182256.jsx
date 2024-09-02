import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);
  const slides = [
    "https://themes.rslahmed.dev/rafcart/assets/images/banner-1.jpg",
    "https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg",
    "https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg",
    // Add more images as needed
  ];

  const startSlideShow = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
  };

  useEffect(() => {
    const videoTimer = setTimeout(() => setShowVideo(false), 2000); // Show video for 2 seconds

    if (!showVideo) {
      startSlideShow();
    }

    return () => {
      clearTimeout(videoTimer);
      clearInterval(slideIntervalRef.current);
    };
  }, [showVideo]);

  const goToSlide = (slideIndex) => {
    clearInterval(slideIntervalRef.current);
    setCurrentSlide(slideIndex);
    startSlideShow();
  };

  return (
    <div className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full ${styles.normalFlex}`}>
      {showVideo ? (
        <video width="100%" height="100%" autoPlay muted loop>
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          ))}

          <div className="slider-controls">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slider-indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                ></button>
                ))}
                </div>
                <div className={`${styles.section} w-[90%] 800px:w-[60%] slider-content`}>
        <h1 className="text-[35px] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize">
          Best Collection for Home Decoration
        </h1>
        <p className="pt-5 text-[16px] text-[#000000ba]">
          Explore our exclusive collection to find the perfect pieces for your home.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  )}
</div>
);
};

export default Hero;

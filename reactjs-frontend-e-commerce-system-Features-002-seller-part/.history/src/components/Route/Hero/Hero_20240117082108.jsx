import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);
  const slides = [
    {
      url: "https://themes.rslahmed.dev/rafcart/assets/images/banner-1.jpg",
      title: "First Collection",
      description: "Explore our exclusive first collection for your home."
    },
    {
      url: "https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg",
      title: "Second Collection",
      description: "Discover the second collection with unique designs."
    },
    {
      url: "https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg",
      title: "Third Collection",
      description: "Enhance your space with our third collection."
    },
    // Add more images and texts as needed
  ];

  const startSlideShow = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
  };

  useEffect(() => {
    if (!showVideo) {
      startSlideShow();
    }

    return () => {
      clearInterval(slideIntervalRef.current);
    };
  }, [showVideo]);

  useEffect(() => {
    const videoTimer = setTimeout(() => setShowVideo(false), 2000); // Show video for 2 seconds

    return () => clearTimeout(videoTimer);
  }, []);

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
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className={`flex flex-col items-center justify-center h-full ${styles.section}`}>
                <h1 className={`${styles.heading}`}>{slide.title}</h1>
                <p className="text-[16px] text-[#e3824e]">{slide.description}</p>
                <Link to="/products" className="inline-block">
                  <div className={`${styles.button} bg-transparent border border-white hover:bg-white hover:text-black transition ease-in-out duration-300`}>
                    <span className="text-[#fff] text-[16px] font-[600]">
                      Shop Now
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
          <div className={`${styles.custom_container} slider-controls`}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.active_indicator} ${index === currentSlide ? styles.activeStatus : ""}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);
  const slides = [
    {
      url: "https://img.freepik.com/free-vector/sale-banner-template-design-big-sale-special-up-50-off-super-sale-end-season-special-offer-banner-vector-illustration_157027-1402.jpg?size=626&ext=jpg&ga=GA1.2.1017893122.1704790637&semt=ais",
      title: "First Collection",
      description: "Explore our exclusive first collection for your home."
    },
    {
      url: "https://www.freepik.com/premium-psd/online-sale-banner-design-black-friday-3d-rendered_34459517.htm#fromView=search&term=e-commerce+promotion+banner&track=ais&regularType=psd&page=1&position=51&uuid=7078ced5-5894-4ac3-92de-eb397cf6cda6",
      title: "Second Collection",
      description: "Discover the second collection with unique designs."
    },
    {
      url: "https://www.freepik.com/premium-psd/special-offer-social-media-banner-template-design_34459586.htm#fromView=search&term=e-commerce+promotion+banner&track=ais&regularType=psd&page=1&position=3&uuid=7078ced5-5894-4ac3-92de-eb397cf6cda6",
      title: "Third Collection",
      description: "Enhance your space with our third collection."
    },
    // Add more images and texts as needed
  ];

  const startSlideShow = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds
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
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                width: '100%',
                height: '90vh', // Adjust the height as needed
                border: 'none' // Make sure there is no border
              }}
            >
              <div className={`flex flex-col items-center justify-center h-full text-center ${styles.section}`}>
                <h1 className={`${styles.heading}`}>{slide.title}</h1>
                <p className="text-[16px] text-[#e3824e] mb-4">{slide.description}</p>
                <p className="text-[14px] text-white max-w-[80%] mx-auto">
                  Discover the finest selection of products in our {slide.title}. Each piece is crafted with care and attention to detail.
                </p>
                <Link to="/products" className="inline-block mt-6">
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

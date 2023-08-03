import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = ({ images, slideOptions }) => {
  const defaultSlideOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings = { ...defaultSlideOptions, ...slideOptions };

  return (
    <div className="slider-container w-4/5 mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className=" w-screen h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;


import React from 'react';
import Banner from './Banner';

const Slider = () => {
    const images = [
        'https://dduniv.ac.in/flashphotos/photos/4e0356de2a3b0d10dcc6dc965dfabca6.jpg',
        'https://dduniv.ac.in/flashphotos/photos/db6f8abac94959111368f7fec4409637.jpg',
        'https://dduniv.ac.in/flashphotos/photos/8b5e884c5d23eb69e52affe53c40b401.jpg',
      ];
    
      const customSlideOptions = {
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
      return (
        <div className="w-screen">
          <Banner images={images} slideOptions={customSlideOptions} />
        </div>
      );
    };

export default Slider;
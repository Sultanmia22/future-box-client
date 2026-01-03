import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return <div>
    <Carousel infiniteLoop='true' autoPlay='true'>
      <div className='h-[700px]'>
        <img src="https://i.ibb.co.com/kLN22wJ/Sunset-at-the-Beach.jpg" className='h-full object-cover w-full'/>
        
      </div>
      <div className='h-[700px]'>
        <img src="https://i.ibb.co.com/XrkdmsxS/pic02.jpg" className='h-full object-cover w-full'/>
        
      </div>
      <div className='h-[700px]'>
        <img src="https://i.ibb.co.com/Sw1RsXGP/vibrant-pixel-art-city-street-night-neon-lights-rain-365532189.jpg" className='h-full object-cover w-full'/>
        
      </div>
    </Carousel>
  </div>
  
};

export default Slider;
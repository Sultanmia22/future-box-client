import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return <div>
    <Carousel>
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
  /* const images = [
    {
      original: "https://i.ibb.co.com/kLN22wJ/Sunset-at-the-Beach.jpg",
      thumbnail: "https://i.ibb.co.com/kLN22wJ/Sunset-at-the-Beach.jpg",

    },
    {
      original: "https://i.ibb.co.com/XrkdmsxS/pic02.jpg",
      thumbnail: "https://i.ibb.co.com/XrkdmsxS/pic02.jpg",
    },
    {
      original: "https://i.ibb.co.com/Sw1RsXGP/vibrant-pixel-art-city-street-night-neon-lights-rain-365532189.jpg",
      thumbnail: "https://i.ibb.co.com/Sw1RsXGP/vibrant-pixel-art-city-street-night-neon-lights-rain-365532189.jpg",
    },
  ];
  return <div className='my-10'>
    <ImageGallery items={images} />;
  </div> */
};

export default Slider;
import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = () => {
    const images = [
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
        <ImageGallery items={images}/>;
    </div>
};

export default Slider;
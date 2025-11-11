import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = () => {
    const images = [
  {
    original: "https://i.ibb.co.com/HfcnqJX0/Neon-Nights.webp",
    thumbnail: "https://i.ibb.co.com/HfcnqJX0/Neon-Nights.webp",
    
  },
  {
    original: "https://i.ibb.co.com/TDhkm7QD/2149419511.jpg",
    thumbnail: "https://i.ibb.co.com/TDhkm7QD/2149419511.jpg",
  },
  {
    original: "https://i.ibb.co.com/fzYqThSG/tranquil-lakeside-scene-with-mountains-cabin-sunset.jpg",
    thumbnail: "https://i.ibb.co.com/fzYqThSG/tranquil-lakeside-scene-with-mountains-cabin-sunset.jpg",
  },
];
    return <div className='my-10'>
        <ImageGallery items={images}/>;
    </div>
};

export default Slider;
import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="carousel mx-2 md:mx-0 max-w-full md:max-h-[600px] py-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src='https://pp-au.b-cdn.net/wp-content/uploads/2023/05/Neon-Nights-Van-Glow.jpg'
                        className="w-full  object-fill rounded-lg " />
                    <div className="absolute left-5 right-5 top-1/2 md:flex -translate-y-1/2 transform justify-between hidden ">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.freepik.com/free-photo/digital-art-international-women-s-day-celebration-women-s-rights_23-2151368483.jpg?semt=ais_hybrid&w=740&q=80"
                        className="w-full object-fill rounded-lg " />
                    <div className="absolute left-5 right-5 top-1/2 md:flex -translate-y-1/2 transform justify-between hidden ">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://images.stockcake.com/public/8/6/1/861ba567-578c-43fd-8adf-4bee4f1d6be0_large/sunset-watercolor-landscape-stockcake.jpg"
                        className="w-full object-fill rounded-lg " />
                    <div className="absolute left-5 right-5 top-1/2 md:flex -translate-y-1/2 transform justify-between hidden ">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
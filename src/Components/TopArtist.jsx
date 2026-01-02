import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TopArtist = () => {
    return (
        <div className='mx-4 md:mx-0'>

            <h2 className='text-4xl font-semibold text-gray-900 dark:text-gray-100 text-center py-5'> Top Artists of the Week </h2>
            <div className='pb-20 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div >

                    <div data-aos="zoom-in" className="card bg-base-100  shadow-sm p-5 rounded-lg border-2 border-primary">
                        <figure className=''>
                            <img
                                src='https://i.ibb.co.com/nqVsTQZt/vivid-emotion-painting-stockcake.jpg'
                                alt="Shoes" className='md:w-full md:h-[600px] rounded-lg object-cover' />

                        </figure>
                        <div className="">

                            <div className='flex flex-col md:flex-row md:justify-between items-center py-4'>
                                <h2 className='text-2xl font-semibold'> Portrait in Blue </h2>
                                <h2 className=' text-gray-600 dark:text-white'> Category : Portrait </h2>
                            </div>

                            <div className='flex flex-col md:flex-row md:justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <figure>
                                        <img src="https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774" alt="" className='w-15 h-15 object-cover rounded-full' />
                                    </figure>
                                    <div>
                                        <p className='text-gray-500 dark:text-white'>Artist : Isabella Martinez</p>
                                        <p className='text-gray-500 dark:text-white'>isabella.m@portraiture.com</p>
                                    </div>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <p className='text-primary'>Rating :</p>
                                    <p className='text-secondary'>4.9</p>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>

                <div>
                    <div data-aos="zoom-in" className="card bg-base-100  shadow-sm p-5 rounded-lg border-2 border-primary">
                        <figure className=''>
                            <img
                                src='https://i.ibb.co.com/XrkdmsxS/pic02.jpg'
                                alt="Shoes" className='md:w-full md:h-[600px] rounded-lg object-cover' />

                        </figure>
                        <div className="">

                            <div className='flex flex-col md:flex-row md:justify-between items-center py-4'>
                                <h2 className='text-2xl font-semibold'> Digital Dreams </h2>
                                <h2 className=' text-gray-600 dark:text-white'> Category : Digital Art </h2>
                            </div>

                            <div className='flex flex-col md:flex-row md:justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <figure>
                                        <img src="https://i.ibb.co.com/tjRZcCz/top-avart-2.avif" alt="" className='w-15 h-15 object-cover rounded-full' />
                                    </figure>
                                    <div>
                                        <p className='text-gray-500 dark:text-white'>Artist : Sarah Thompson</p>
                                        <p className='text-gray-500 dark:text-white'>sarah.t@digitalcreative.com</p>
                                    </div>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <p className='text-primary'>Rating :</p>
                                    <p className='text-secondary'>4.8</p>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div>

                    <div data-aos="zoom-in" className="card bg-base-100  shadow-sm p-5 rounded-lg border-2 border-primary">
                        <figure className=''>
                            <img
                                src='https://i.ibb.co.com/Sw1RsXGP/vibrant-pixel-art-city-street-night-neon-lights-rain-365532189.jpg'
                                alt="Shoes" className='md:w-full md:h-[600px] rounded-lg object-cover' />

                        </figure>
                        <div className="">

                            <div className='flex flex-col md:flex-row md:justify-between items-center py-4'>
                                <h2 className='text-2xl font-semibold'> Neon Nights </h2>
                                <h2 className=' text-gray-600 dark:text-white'> Category : Digital Art </h2>
                            </div>

                            <div className='flex flex-col md:flex-row md:justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <figure>
                                        <img src="https://i.ibb.co.com/VcDkhSMt/top-avart-3.jpg" alt="" className='w-15 h-15 object-cover rounded-full' />
                                    </figure>
                                    <div>
                                        <p className='text-gray-500 dark:text-white'>Artist : Yuki Tanaka</p>
                                        <p className='text-gray-500 dark:text-white'>yuki.tanaka@neonart.com</p>
                                    </div>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <p className='text-primary'>Rating :</p>
                                    <p className='text-secondary'>4.7</p>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopArtist;
import React from 'react';
import { FaComment, FaHeart } from 'react-icons/fa';

const Highlist = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center text-primary'>Community Highlights</h2>
            {/* card parent  */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-6'>

                {/* single card 1*/}
                <div className='bg-white p-5 border-2 border-primary rounded-lg flex flex-col justify-between'>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <figure>
                                <img src='https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-model-sexy-man-dressed-tshirt-jeans-fashion-male-isolated-blue-wall-studio_158538-26731.jpg?semt=ais_hybrid&w=740&q=80' alt="" className='w-15 h-15 rounded-full object-cover' />
                            </figure>
                            <div>
                                <h2 className='font-bold'>Michael Brown</h2>
                                <p className='text-sm text-gray-500'>2025-05-01</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-1'>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>5.0</p>
                        </div>
                    </div>

                    <p className='py-4 text-gray-500'>Absolutely stunning work! The color palette is mesmerizing and the composition is perfect. This artist has an incredible eye for detail</p>

                    <div className='w-full h-[1px] border border-gray-300'></div>

                    <div className='flex justify-between items-center pt-3'>
                        <div className='flex items-center gap-1'>
                            <span><FaHeart className='text-red-600' /></span>
                            <span className='text-sm text-gray-600 font-semibold'> 3.2K </span>
                        </div>

                        <div className='flex items-center gap-1'>
                            <span><FaComment /></span>
                            <span className='text-sm text-gray-600 font-semibold'> 1.3K </span>
                        </div>
                    </div>
                </div>

                 {/* single card 2*/}
                <div className='bg-white p-5 border-2 border-primary rounded-lg flex flex-col justify-between'>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <figure>
                                <img src='https://i.ibb.co.com/jkmGGJT1/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands-197531-343.jpg' alt="" className='w-15 h-15 rounded-full object-cover' />
                            </figure>
                            <div>
                                <h2 className='font-bold'>Lisa Thompson</h2>
                                <p className='text-sm text-gray-500'>2025-02-21</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-1'>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>4.8</p>
                        </div>
                    </div>

                    <p className='py-4 text-gray-500'>The lighting in this photograph is phenomenal! You can feel the warmth of the sunrise. Truly inspiring work</p>

                    <div className='w-full h-[1px] border border-gray-300'></div>

                    <div className='flex justify-between items-center pt-3'>
                        <div className='flex items-center gap-1'>
                            <span><FaHeart className='text-red-600' /></span>
                            <span className='text-sm text-gray-600 font-semibold'> 1.4K </span>
                        </div>

                        <div className='flex items-center gap-1'>
                            <span><FaComment /></span>
                            <span className='text-sm text-gray-600 font-semibold'> 1.1K </span>
                        </div>
                    </div>
                </div>

                 {/* single card */}
                <div className='bg-white p-5 border-2 border-primary rounded-lg flex flex-col justify-between'>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <figure>
                                <img src='https://i.ibb.co.com/ynZ2dLn2/360-F-197117649-MYVpw74-AYw4-Fmg-DGC1ty-M7-G1x-Mav-ISh-U.jpg' alt="" className='w-15 h-15 rounded-full object-cover' />
                            </figure>
                            <div>
                                <h2 className='font-bold'>David Wilson</h2>
                                <p className='text-sm text-gray-500'>2025-08-26</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-1'>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>5.0</p>
                        </div>
                    </div>

                    <p className='py-4 text-gray-500'>These characters are so full of life! The personality shines through every line. Exceptional illustration skills</p>

                    <div className='w-full h-[1px] border border-gray-300'></div>

                    <div className='flex justify-between items-center pt-3'>
                        <div className='flex items-center gap-1'>
                            <span><FaHeart className='text-red-600' /></span>
                            <span className='text-sm text-gray-600 font-semibold'> 4.2K </span>
                        </div>

                        <div className='flex items-center gap-1'>
                            <span><FaComment /></span>
                            <span className='text-sm text-gray-600 font-semibold'> 4.1K </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Highlist;
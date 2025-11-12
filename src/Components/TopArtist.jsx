import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TopArtist = () => {
    return (
        <div>
           
             <h2  className='text-4xl font-semibold text-primary text-center py-5'> <Typewriter words={[' Top Artists of the Week']}  loop={true} typeSpeed={50} cursorStyle='|'   /> </h2>
            <div className='pb-20 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div>

                    <div className="card bg-base-100  shadow-sm p-5 rounded-lg border-2 border-primary">
                        <figure className=''>
                            <img
                                src='https://i.ibb.co.com/LDL69bF3/16193152-thumbnail.jpg'
                                alt="Shoes" className='md:w-full md:h-[600px] rounded-lg object-cover' />

                        </figure>
                        <div className="">

                            <div className='flex flex-col md:flex-row md:justify-between items-center py-4'>
                                <h2 className='text-2xl font-semibold'> Portrait in Blue </h2>
                                <h2 className=' text-gray-600'> Category : Portrait </h2>
                            </div>

                            <div className='flex flex-col md:flex-row md:justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <figure>
                                        <img src="https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774" alt="" className='w-15 h-15 object-cover rounded-full' />
                                    </figure>
                                    <div>
                                        <p className='text-gray-500'>Artist : Isabella Martinez</p>
                                        <p className='text-gray-500'>isabella.m@portraiture.com</p>
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
                    <div className="card bg-base-100  shadow-sm p-5 rounded-lg border-2 border-primary">
                        <figure className=''>
                            <img
                                src='https://i.ibb.co.com/B2VFztWV/Digital-Dreams.jpg'
                                alt="Shoes" className='md:w-full md:h-[600px] rounded-lg object-cover' />

                        </figure>
                        <div className="">

                            <div className='flex flex-col md:flex-row md:justify-between items-center py-4'>
                                <h2 className='text-2xl font-semibold'> Digital Dreams </h2>
                                <h2 className=' text-gray-600'> Category : Digital Art </h2>
                            </div>

                            <div className='flex flex-col md:flex-row md:justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <figure>
                                        <img src="https://i.ibb.co.com/qMrCPbnt/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manage.jpg" alt="" className='w-15 h-15 object-cover rounded-full' />
                                    </figure>
                                    <div>
                                        <p className='text-gray-500'>Artist : Sarah Thompson</p>
                                        <p className='text-gray-500'>sarah.t@digitalcreative.com</p>
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

                    <div className="card bg-base-100  shadow-sm p-5 rounded-lg border-2 border-primary">
                        <figure className=''>
                            <img
                                src='https://i.ibb.co.com/60mx9pqk/Neon-Nights.jpg'
                                alt="Shoes" className='md:w-full md:h-[600px] rounded-lg object-cover' />

                        </figure>
                        <div className="">

                            <div className='flex flex-col md:flex-row md:justify-between items-center py-4'>
                                <h2 className='text-2xl font-semibold'> Neon Nights </h2>
                                <h2 className=' text-gray-600'> Category : Digital Art </h2>
                            </div>

                            <div className='flex flex-col md:flex-row md:justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <figure>
                                        <img src="https://i.ibb.co.com/B2H69nQX/medium-shot-woman-posing-indoors-23-2149915935.jpg" alt="" className='w-15 h-15 object-cover rounded-full' />
                                    </figure>
                                    <div>
                                        <p className='text-gray-500'>Artist : Yuki Tanaka</p>
                                        <p className='text-gray-500'>yuki.tanaka@neonart.com</p>
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
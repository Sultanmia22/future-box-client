import React from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter'
import { TypeAnimation } from 'react-type-animation';
const MostRecent = ({ artworkData }) => {
    // console.log(artworkData)   
    return (
        <div className='pb-20'>
            <h2 className='text-4xl font-semibold text-primary text-center py-5'> <TypeAnimation
                sequence={[
                    'Most Recent',
                    500,

                    '',
                    500,
                ]}

                repeat={Infinity}
            />
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    artworkData.map(data =>

                        <div data-aos="zoom-in" key={data._id} className='mx-4 md:mx-0'>
                            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 rounded-3xl border-2 border-primary/20 hover:border-primary/40 hover:-translate-y-2">
                                <figure className='relative overflow-hidden rounded-2xl'>
                                    <img
                                        src={data.image}
                                        alt="Shoes"
                                        className='w-full h-[300px] object-cover rounded-2xl hover:scale-110 transition-transform duration-500' />

                                    {/* Category Badge */}
                                    <div className='absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg'>
                                        {data.category}
                                    </div>
                                </figure>

                                <div className="mt-5">
                                    <div className='flex justify-between items-center py-3'>
                                        <div>
                                            <h2 className="card-title text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                {data.title}
                                            </h2>
                                            <p className='text-gray-600 dark:text-gray-300 flex items-center gap-2 font-medium'>
                                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                                Artist: {data.artist_name}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-4 mb-4'>
                                        <p className='text-gray-700 dark:text-gray-200 flex items-center gap-2'>
                                            <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                            </svg>
                                            <span className='font-semibold'>Category:</span>
                                            <span className='text-primary font-bold'>{data.category}</span>
                                        </p>
                                    </div>

                                    <div className="card-actions justify-end">
                                        <Link
                                            to={`/viewDetails/${data._id}`}
                                            className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        /*  <div data-aos="zoom-in" key={data._id} className='mx-4 md:mx-0'>
                             <div className="card bg-base-100  shadow-sm p-5 rounded-lg border-2 border-primary">
                                 <figure className=''>
                                     <img
                                         src={data.image}
                                         alt="Shoes" className='w-full h-[300px] rounded-lg ' />
 
                                 </figure>
                                 <div className="">
 
                                     <div className='flex justify-between items-center py-2'>
 
                                         <div>
                                             <h2 className="card-title text-2xl font-semibold">{data.title}</h2>
                                             <p className='text-gray-500 dark:text-white'>Artist : {data.artist_name}</p>
                                         </div>
 
                                     </div>
 
                                     <div>
                                         <p className='text-gray-500 dark:text-white'>Category : {data.category} </p>
                                     </div>
 
                                     <div className="card-actions justify-end">
                                         <Link to={`/viewDetails/${data._id}`} className="btn btn-primary">View Details</Link>
                                     </div>
                                 </div>
                             </div>
                         </div> */

                    )
                }
            </div>

        </div>
    );
};

export default MostRecent;
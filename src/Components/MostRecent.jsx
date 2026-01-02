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
                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default MostRecent;
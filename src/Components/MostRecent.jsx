import React from 'react';
import ratingIcon from '../assets/star.png'
import { Link } from 'react-router';
const MostRecent = ({ artworkData }) => {
    // console.log(artworkData)

   
    return (
        <div className='pb-20'>
            <h2 className='text-4xl font-semibold text-primary text-center py-5'> Most Recent </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    artworkData.map(data =>

                        <div key={data._id} className='mx-4 md:mx-0'>
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
                                            <p className='text-gray-500'>Artist : {data.artist_name}</p>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                             <img src={ratingIcon} alt="" className='w-3 h-3' />
                                            <p>  {data.rating} </p>
                                        </div>

                                    </div>

                                    <div>
                                        <p className='text-gray-500'>Category : {data.category} </p>
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
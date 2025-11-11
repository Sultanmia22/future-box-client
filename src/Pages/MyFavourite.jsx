import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import ratingIcon from '../assets/star.png'
import { Link } from 'react-router';
const MyFavourite = () => {

    const { user } = use(AuthContext)
    const [favouriteData, setFavouriteData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4011/myfavourite?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('after fetch data', data)
                setFavouriteData(data)
            })
    }, [user])



    return (
        <div>
            <div className='text-center py-6 space-y-3'>
                <h2 className='text-4xl font-semibold text-primary'>Your Personal Art Collection</h2>
                <p className='text-gray-500'>Welcome to your private gallery of inspiration. Here you’ll find all the artworks you’ve loved and saved <br /> a personal space to revisit your favorite creations, admire their beauty, and stay connected to the art that inspires your heart.</p>
            </div>

            <div className='grid grid-cols-1 gap-4'>
                {
                    favouriteData.map(data =>

                        <div className='bg-white shadow p-4 flex justify-between rounded-lg'>

                            <div className='left_site'>
                                <div className='flex gap-2'>
                                    <figure className=''>
                                        <img
                                            src={data.image}
                                            alt="Shoes" className='w-[100px] h-[100px] rounded-lg ' />
                                    </figure>
                                    <div className='space-y-2'>
                                        <h2 className="card-title text-2xl font-semibold text-primary">{data.title}</h2>
                                        <button className='px-3 py-1 bg-secondary rounded-full text-white'>{data.category} </button>

                                        <div className='flex items-center gap-1'>
                                            <img src={ratingIcon} alt="" className='w-3 h-3' />
                                            <p>  {data.rating} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='right_side flex flex-col items-center justify-center'>
                                <div className="">
                                    <Link to={`/viewDetails/${data._id}`} className="btn btn-primary">Unfavorite</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyFavourite;
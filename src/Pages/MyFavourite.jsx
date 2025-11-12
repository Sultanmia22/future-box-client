import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import ratingIcon from '../assets/star.png'
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import noDataImg from '../assets/download.png'
const MyFavourite = () => {

    const { user } = use(AuthContext)
    const [favouriteData, setFavouriteData] = useState([])
    const [fetchs,reFetchs] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:4011/myfavourite?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('after fetch data', data)
                setFavouriteData(data)
            })
    }, [user,fetchs])

    //! handle unfavorite function 
    const handleUnfavorite = (id) => {
        fetch(`http://localhost:4011/unfavorite/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('after unfavorite ',data)
            toast.success('Unfavorite Successfully');
            reFetchs(!fetchs)
        })
    }

    if(favouriteData.length === 0){
        return <div className='flex  flex-col justify-center items-center min-h-screen'>
            <img src={noDataImg} alt="" className='md:w-[300px] md:h-[300px]' />
               <h2 className='text-3xl text-primary'> No Favourite Data Availabe </h2>
              </div>
    }

    return (
        <div>
            <div className='text-center py-6 space-y-3'>
                <h2 className='text-4xl font-semibold text-primary'>Your Personal Art Collection</h2>
                <p className='text-gray-500'>Welcome to your private gallery of inspiration. Here you’ll find all the artworks you’ve loved and saved <br /> a personal space to revisit your favorite creations, admire their beauty, and stay connected to the art that inspires your heart.</p>
            </div>

            <div className='grid grid-cols-1 gap-4 mb-10 md:mb-0 mx-4'>
                {
                    favouriteData.map(data =>

                        <div className='bg-white shadow p-4 flex flex-col md:flex-row md:justify-between rounded-lg'>

                            <div className='left_site'>
                                <div className='flex flex-col md:flex-row gap-2'>
                                    <figure className=''>
                                        <img
                                            src={data.image}
                                            alt="Shoes" className='w-[100px] h-[100px] rounded-lg ' />
                                    </figure>
                                    <div className='space-y-2'>
                                        <h2 className="card-title text-xl md:text-2xl font-semibold text-primary">{data.title}</h2>
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
                                    <button onClick={() => handleUnfavorite(data._id)} className="btn btn-primary">Unfavorite</button>
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
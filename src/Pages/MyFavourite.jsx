import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import ratingIcon from '../assets/star.png'
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import noDataImg from '../assets/download.png'
import Loading from '../Components/Loading';
const MyFavourite = () => {

    const { user } = use(AuthContext)
    const [favouriteData, setFavouriteData] = useState([])
    const [fetchs, reFetchs] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://future-box-server-pi.vercel.app/myfavourite?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('after fetch data', data)
                setFavouriteData(data)
                setLoading(false)
            })
    }, [user, fetchs])

    //! handle unfavorite function 
    const handleUnfavorite = (id) => {
        fetch(`https://future-box-server-pi.vercel.app/unfavorite/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('after unfavorite ', data)
                toast.success('Unfavorite Successfully');
                reFetchs(!fetchs)
            })
    }

    if (loading) {
        return <Loading />
    }

    if (favouriteData.length === 0) {
        return <div className='flex  flex-col justify-center items-center min-h-screen'>
            <img src={noDataImg} alt="" className='md:w-[300px] md:h-[300px]' />
            <h2 className='text-3xl text-primary'> No Favourite Data Availabe </h2>
        </div>
    }

    return (
        <div className=''>
            <div className='text-center py-6 space-y-3'>
                <h2 className='text-4xl font-semibold text-primary'>Your Personal Art Collection</h2>
                <p className='text-gray-500 dark:text-white'>Welcome to your private gallery of inspiration. Here you’ll find all the artworks you’ve loved and saved <br /> a personal space to revisit your favorite creations, admire their beauty, and stay connected to the art that inspires your heart.</p>
            </div>

            <div className='grid grid-cols-1 gap-4 mb-10 md:mb-0 mx-4'>
                {
                    favouriteData.map(data =>

                        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col md:flex-row md:justify-between border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/50'>

                            <div className='left_site flex-1'>
                                <div className='flex flex-col md:flex-row gap-5'>
                                    <figure className='relative group overflow-hidden rounded-xl'>
                                        <img
                                            src={data.image}
                                            alt="Shoes"
                                            className='w-[110px] h-[110px] rounded-xl object-cover shadow-sm group-hover:scale-110 transition-transform duration-500' />
                                        <div className='absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                    </figure>

                                    <div className='space-y-3 flex-1 space-x-2'>
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                                            {data.title}
                                        </h2>

                                        <span className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-lg text-primary font-semibold text-sm border border-primary/20 hover:border-primary/40 transition-all duration-300'>
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                            </svg>
                                            {data.category}
                                        </span>

                                        <div className='inline-flex items-center gap-2 bg-gradient-to-r from-secondary/15 to-secondary/5 dark:from-secondary/25 dark:to-secondary/10 px-4 py-2 rounded-lg border border-secondary/20'>
                                            <img src={ratingIcon} alt="" className='w-5 h-5' />
                                            <p className='font-bold text-gray-700 dark:text-gray-200'>{data?.rating}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='right_side flex flex-col items-center justify-center mt-6 md:mt-0 md:ml-6'>
                                <button
                                    onClick={() => handleUnfavorite(data._id)}
                                    className="group relative bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 hover:from-secondary hover:to-secondary/95 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 flex items-center gap-2 border border-secondary/30"
                                >
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <span className='tracking-wide'>Unfavorite</span>
                                </button>
                            </div>
                        </div>



                    )
                }
            </div>
        </div>
    );
};

export default MyFavourite;
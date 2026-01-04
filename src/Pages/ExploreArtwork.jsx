import React, { useEffect, useState } from 'react';
import ratingIcon from '../assets/star.png'
import { Link } from 'react-router';
import { AiFillLike } from 'react-icons/ai';
import Loading from '../Components/Loading';

const ExploreArtwork = () => {
    const [orginalData, setOrginalData] = useState([])
    const [artData, setArtData] = useState([])
    const [fetchs, reFetchs] = useState(true)
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`https://future-box-server-pi.vercel.app/explore`)
            .then(res => res.json())
            .then(data => {
                // console.log('getting after data', data);
                setOrginalData(data)
                setArtData(data)
                setLoading(false)
            })
    }, [fetchs])

    //! useEffect for get all category 
    useEffect(() => {
        fetch(`https://future-box-server-pi.vercel.app/categorys`)
            .then(res => res.json())
            .then(data => {
                // console.log('after getting data',data)
                setCategories(data)
            })
    }, [])




    //! handle Search function 
    const handleSearch = (e) => {
        e.preventDefault()
        const searchText = e.target.searchValue.value;

        fetch(`https://future-box-server-pi.vercel.app/search?search=${searchText}`)
            .then(res => res.json())
            .then(data => {
                // console.log('search after data', data)

                setArtData(data)
                e.target.reset()
            })
    }

    //! handle filter by category : 
    const handlefilter = (selectValue) => {
        if (selectValue === 'All') {
            setArtData(orginalData)
            return
        }

        fetch(`https://future-box-server-pi.vercel.app/category?category=${selectValue}`)
            .then(res => res.json())
            .then(data => {
                // console.log('search after data', data)
                setArtData(data)

            })
    }

    //! handle Like Count function 
    const handleLikeCount = (id) => {
        fetch(`https://future-box-server-pi.vercel.app/likeCount/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log('after data',data)
                reFetchs(!fetchs)
            })
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className='mx-4 md:mx-0'>
            <div className=' py-20 space-y-3'>
                <h2 className='text-4xl font-semibold text-primary text-center'> Explore Inspiring Artworks from Talented Creators </h2>
                <p className='text-center text-gray-500 dark:text-white'>Explore the world of creativity where every color speaks emotion. From digital art to paintings, each masterpiece carries a story. Feel the passion, connect with imagination, and <br /> celebrate the beauty of art at ARTIFY.</p>

                <div className='py-6 mx-4 md:mx-0 flex flex-col md:flex-row gap-5 justify-end md:justify-between md:items-center items-end'>
                    <div>
                        <form>
                            <select onChange={(e) => handlefilter(e.target.value)} defaultValue='Filter By Category' className="select select-primary">
                                <option disabled={true}>Filter By Category</option>
                                <option value="All">All</option>
                                {
                                    categories.map(cat =>
                                        <option value={cat}> {cat} </option>
                                    )
                                }
                            </select>
                        </form>
                    </div>
                    <form onSubmit={handleSearch} className=' flex justify-center items-center gap-1'>
                        <input type="text" className='input' name='searchValue' placeholder='Search by title' />
                        <button className='btn btn-secondary'> Search </button>
                    </form>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        artData.map(data =>

                            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 rounded-3xl border-2 border-primary/20 hover:border-primary/40 hover:-translate-y-2">
                                <figure className='relative overflow-hidden rounded-2xl'>
                                    <img
                                        src={data.image}
                                        alt="Artwork"
                                        className='w-full h-[300px] object-cover rounded-2xl hover:scale-110 transition-transform duration-500' />

                                    {/* Category Badge */}
                                    <div className='absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg'>
                                        {data.category}
                                    </div>
                                </figure>

                                <div className="mt-5">
                                    <div className='flex justify-between items-start py-3'>
                                        <div className='flex-1'>
                                            <h2 className="card-title text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                {data.title}
                                            </h2>
                                            <p className='text-gray-600 dark:text-gray-300 flex items-center gap-2'>
                                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                                <span className='font-medium'>Artist:</span> {data.artist_name}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stats Section */}
                                    <div className='bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-4 mb-4'>
                                        <div className='flex items-center gap-2'>
                                            <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                            </svg>
                                            <p className='text-gray-700 dark:text-gray-200 font-semibold'>
                                                Category: <span className='text-primary font-bold'>{data.category}</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-between items-center gap-3 pt-2">
                                        {/* Like Button */}
                                        <Link
                                            onClick={() => handleLikeCount(data._id)}
                                            className='px-6 py-2.5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105'
                                        >
                                            <AiFillLike className='text-white' size={22} />
                                            <span className='text-white font-bold text-lg'>{data.like_count}</span>
                                        </Link>

                                        {/* View Details Button */}
                                        <Link
                                            to={`/viewDetails/${data._id}`}
                                            className="flex-1 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ExploreArtwork;  
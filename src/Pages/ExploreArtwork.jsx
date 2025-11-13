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
        <div>
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
                        <input type="text" className='input' name='searchValue' placeholder='Search' />
                        <button className='btn btn-primary'> Search </button>
                    </form>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        artData.map(data =>
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
                                                <p className='text-gray-500 dark:text-white'>Artist : {data.artist_name}</p>
                                            </div>


                                        </div>

                                        <div>
                                            <p className='text-gray-500 dark:text-white'>Category : {data.category} </p>
                                        </div>

                                        <div className="flex justify-between pt-3 ">
                                            <Link onClick={() => handleLikeCount(data._id)} className='px-5 py-[1px] bg-primary rounded-full flex items-center gap-1'> <span><AiFillLike className='text-white' size={20} /></span> <span className='text-white font-bold'>{data.like_count}</span></Link>
                                            <Link to={`/viewDetails/${data._id}`} className="btn btn-primary">View Details</Link>
                                        </div>
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
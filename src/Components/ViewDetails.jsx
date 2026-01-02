import React, { use, useEffect, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';
import Loading from './Loading';

const ViewDetails = () => {
    const { user } = use(AuthContext)
    const { id } = useParams()
    const [viewData, setViewData] = useState({})
    const [loading, setLoading] = useState(true)
    const [fetchs, reFetchs] = useState(true)
    const [toalArt,setTotalArt] = useState([])


    // const {id,image,title,artist_name,category,created_at,email,description,price,visibility,rating,medium,like_count,artist_info_name,artist_info_photo,artist_info_total_artworks} = viewData

    //! fetch data for view details 
    useEffect(() => {
        fetch(`https://future-box-server-pi.vercel.app/viewDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setViewData(data)
                setLoading(false)
            })
    }, [id, fetchs])

    //! handle like count fucntion 
    const handleLikeCount = (id) => {
        fetch(`https://future-box-server-pi.vercel.app/likeCount/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log('after data',data)
                reFetchs(!fetchs)
                setLoading(false)
            })
    }

    //! handle add to favourite artwork
    const handleAddFavourite = (id) => {
        const favData = {
            image: viewData.image,
            title: viewData.title,
            artist_name: viewData.artist_name,
            category: viewData.category,
            created_at: viewData.created_at,
            email: viewData.email,
            description: viewData.description,
            price: viewData.price,
            visibility: viewData.visibility,
            rating: viewData.rating,
            medium: viewData.medium,
            like_count: viewData.like_count,
            artist_info_name: viewData.artist_info_name,
            artist_info_photo: viewData.artist_info_photo,
            artist_info_total_artworks: viewData.artist_info_total_artworks,
            user_email: user.email,
        }

        fetch(`https://future-box-server-pi.vercel.app/favouriteArt`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(favData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after insert data', data)
                toast.success('Add Favourite Successfully')
            })

    }


    //! get total artwork 
    useEffect(() => {
        fetch(`https://future-box-server-pi.vercel.app/totalArt?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log('after get total artwork',data)
           setTotalArt(data)
        })
    },[user])

    

    if (loading) {
        return <Loading />
    }

    return (
        <div className='flex flex-col md:flex-row bg-base-100 shadow-sm my-10 p-10 rounded-xl gap-10 mx-4 md:mx-0'>

            <div className='left border-2 border-primary rounded-lg md:h-[800px]'>
                <figure>
                    <img src={viewData.image} alt="" className='p-2 rounded-2xl md:h-[800px] md:w-[700px]' />
                </figure>
            </div>


            <div className='right flex-1'>
                <h2 className=' text-xl md:text-4xl font-semibold text-primary'> {viewData.title} </h2>
                <div className='flex gap-2 items-center'>
                    <button className='px-3 py-1 bg-primary text-white rounded-full my-3'>{viewData.category} </button>
                    <button className=' md:px-3 px-1 py-1 bg-secondary text-white rounded-full my-3'> {viewData.medium} </button>
                </div>

                <div>
                    <h2 className='text-xl font-medium text-secondary'> Artist : {viewData.artist_name} </h2>
                    <p className='text-justify text-gray-500 dark:text-white text-justify'>{viewData.description}</p>
                </div>


                <div className='artist_info bg-green-100 text-3xl font-semibold mt-10 p-5 rounded-xl'>
                    <h2 className='pb-2 text-xl md:text-3xl text-gray-600 text-center md:text-start'> Artist Information: </h2>
                    <div className='w-full h-[2px] bg-gray-600 mb-3'></div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='left-side border-2 border-white rounded-full w-[100px] h-[100px] mx-auto md:mx-0'>
                            <figure>
                                <img src={viewData?.artist_info_photo} alt="" className='w-[100px] h-[100px] mx-auto md:mx-0 object-fill p0 rounded-full' />
                            </figure>
                        </div>

                        <div className='right-sise'>
                            <div className='text-center md:text-start'>
                                <h2 className=' text-xl font-normal md:text-2xl text-gray-600 md:font-semibold pb-2'>Name : {viewData.artist_name}</h2>
                                <p className='text-[18px] text-black'>Total Artwork : {toalArt.length} </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-5 flex justify-between'>
                    <Link onClick={() => handleLikeCount(viewData._id)} className='px-5 py-[1px] bg-primary rounded-full flex items-center gap-1'> <span><AiFillLike className='text-white' size={20} /></span> <span className='text-white font-bold'>{viewData.like_count}</span></Link>
                    <button onClick={() => handleAddFavourite(viewData._id)} className='btn bg-secondary text-white'>Add to Favorites</button>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;
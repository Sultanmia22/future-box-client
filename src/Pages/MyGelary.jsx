import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import noDataImg from '../assets/download.png'
import Loading from '../Components/Loading';

const MyGelary = () => {

    const { user } = use(AuthContext)
    const [myart, setMyArt] = useState([])
    const [fetchs, refetchs] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://future-box-server-pi.vercel.app/mygallery?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('after fetch data', data)
                setMyArt(data)
                setLoading(false)
            })
    }, [user, fetchs])

    //! handle delete artwork form my gellarry 
    const handleMyGalleryDelete = (id) => {
        fetch(`https://future-box-server-pi.vercel.app/mygalleryDetele/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('after delete data', data)
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your artwork has been from my gallery deleted.",
                            icon: "success"
                        });
                        refetchs(!fetchs)
                    }
                });

            })
    }

    if (loading) {
        return <Loading />
    }

    if (myart.length === 0) {
        return <div className='flex  flex-col justify-center items-center min-h-screen'>
            <img src={noDataImg} alt="" className='md:w-[300px] md:h-[300px]' />
            <h2 className='text-3xl text-primary'> No My Gallery Data Availabe </h2>
        </div>
    }

    return (
        <div className='my-5'>

            <div className='text-center space-y-3'>
                <h2 className='text-4xl text-primary font-semibold'>Your World in Frames</h2>
                <p className='text-gray-500 dark:text-white'>Welcome to your personal gallery — a space where every picture tells a story. Here you can showcase your favorite memories, <br /> creative works, and special moments all in one place. Each photo captures a part of your journey, making this collection truly unique and meaningful</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 py-5'>
                {
                    myart.map(data =>
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

                                    <div className="card-actions justify-between py-3">

                                        <div className='flex items-center gap-2'>
                                            <Link to={`/updateGallery/${data._id}`} className="btn btn-info">Update</Link>
                                            <Link onClick={() => handleMyGalleryDelete(data._id)} className="btn btn-warning">Delete</Link>
                                        </div>

                                        <div>
                                            <Link to={`/viewDetails/${data._id}`} className="btn btn-primary">View Details</Link>
                                        </div>
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

export default MyGelary;
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import noDataImg from '../assets/download.png'
import Loading from '../Components/Loading';
import { toast } from 'react-toastify';

const MyGelary = () => {

    const { user } = use(AuthContext)
    const [myart, setMyArt] = useState([])
    const [fetchs, refetchs] = useState(true)
    const [loading, setLoading] = useState(true)
    const [updateData,setUpdateData] = useState({})
    const [editingId,setEditingId] = useState(null)

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

    //! Handle show update modal 
    const handleShowUpdateModal = (id) => {
        setEditingId(id)
                fetch(`https://future-box-server-pi.vercel.app/updateGellary/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log('update after data', data)
                        setUpdateData(data)
                    })
            document.getElementById('my_modal_5').showModal()
    }

    const handleUpdateArtwork = (e) => {
        e.preventDefault()

        const artist_name = e.target.user_name.value;
        const email = e.target.user_email.value;
        const title = e.target.title.value;
        const image = e.target.photo_url.value;
        const category = e.target.category.value;
        const created_at = new Date().toISOString().split('T')[0]
        const description = e.target.description.value;
        const visibility = e.target.Visibility.value;
        const medium = e.target.medium.value;

        const updateData = { artist_name, email, title, image, category, created_at, description, visibility, medium, like_count: 0, artist_info_photo: user?.PhotoURL };

        fetch(`https://future-box-server-pi.vercel.app/updateMyGallery/${editingId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('update after data', data)
                refetchs(!fetchs)
                toast.success('Update Your Artwork')
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
                                            <Link onClick={() => handleShowUpdateModal(data._id)} className="btn btn-info">Update</Link>
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
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            
            <dialog  id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto md:my-10 ">
                        <div className="card-body border-2 border-primary rounded-lg">
                            <form onSubmit={handleUpdateArtwork}>
                                <fieldset className="fieldset">
                                    {/* Name */}
                                    <label className="label">User Name</label>
                                    <input defaultValue={user?.displayName} type="text" readOnly className="input rounded-full" placeholder="Name" name='user_name' />
                                    {/* email */}
                                    <label className="label">User Email</label>
                                    <input defaultValue={user?.email} type="email" readOnly className="input rounded-full" placeholder="Email" name='user_email' />
                                    {/* Photo URL */}
                                    <label className="label">Photo URL</label>
                                    <input defaultValue={updateData?.image} type="text" className="input rounded-full" placeholder="Photo URL" name='photo_url' />
                                    {/* Title */}
                                    <label className="label">Title</label>
                                    <input defaultValue={updateData.title} type="text" className="input rounded-full" placeholder="Photo URL" name='title' />
                                    {/* category */}
                                    <label className="label">Category</label>
                                    <input defaultValue={updateData.category} type="text" className="input rounded-full" placeholder="Category" name='category' />
                                    {/* Medium */}
                                    <label className="label">Medium</label>
                                    <input defaultValue={updateData.medium} type="text" className="input rounded-full" placeholder="Medium" name='medium' />
                                    {/* Visibility */}
                                    <label className="label">Visibility</label>
                                    <input defaultValue={updateData.visibility} type="text" className="input rounded-full" placeholder="Medium" name='Visibility' />
                                    {/* Description */}
                                    <label className="label">Description</label>
                                    <textarea defaultValue={updateData.description} className='description p-2' placeholder='Write Your Description' name='description'></textarea>


                                    <button className="btn btn-primary mt-4">Update</button>
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-neutral">Close</button>
                                    </form>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyGelary;
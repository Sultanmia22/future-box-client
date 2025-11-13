import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { useParams } from 'react-router';

const UpdateGallery = () => {

    const { user } = use(AuthContext)
    const [data, setData] = useState({})

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://future-box-server-pi.vercel.app/updateGellary/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log('update after data', data)
                setData(data)
            })
    }, [id])



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

        fetch(`https://future-box-server-pi.vercel.app/updateMyGallery/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('update after data', data)
            })
    }

    return (
        <div className='mx-4 md:mx-0 pb-10 md:pb-0'>
            <div className='text-center my-5 space-y-3'>
                <h2 className='text-4xl font-semibold text-primary'>Update Your Artwork</h2>

            </div>
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
                            <input defaultValue={data?.image} type="text" className="input rounded-full" placeholder="Photo URL" name='photo_url' />
                            {/* Title */}
                            <label className="label">Title</label>
                            <input defaultValue={data.title} type="text" className="input rounded-full" placeholder="Photo URL" name='title' />
                            {/* category */}
                            <label className="label">Category</label>
                            <input defaultValue={data.category} type="text" className="input rounded-full" placeholder="Category" name='category' />
                            {/* Medium */}
                            <label className="label">Medium</label>
                            <input defaultValue={data.medium} type="text" className="input rounded-full" placeholder="Medium" name='medium' />
                            {/* Visibility */}
                            <label className="label">Visibility</label>
                            <input defaultValue={data.visibility} type="text" className="input rounded-full" placeholder="Medium" name='Visibility' />
                            {/* Description */}
                            <label className="label">Description</label>
                            <textarea defaultValue={data.description} className='description p-2' placeholder='Write Your Description' name='description'></textarea>


                            <button className="btn btn-primary mt-4">Update</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateGallery;
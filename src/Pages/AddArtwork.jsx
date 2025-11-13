import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';
import Loading from '../Components/Loading';

const AddArtwork = () => {

    const { user } = use(AuthContext)
  

    //! Handle add art work 
    const handleAddArtwork = (e) => {
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


        const newData = { artist_name, email, title, image, category, created_at, description, visibility, medium, like_count: 0, artist_info_photo: user?.photoURL }

        fetch(`http://localhost:4011/addartwork`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('post after data', data)
                toast.success('Add Artwork Successfully')
                e.target.reset()
                setLoading(false)
            })

    }

  

    return (
        <div>
            <div className='text-center my-5 space-y-3'>
                <h2 className='text-4xl font-semibold text-primary'>Add Your Artwork</h2>
                <p className='text-gray-500 dark:text-white'>Welcome to my artwork page, where creativity meets emotion. Each piece reflects my thoughts, dreams, and experiences through vibrant colors and unique styles. <br /> Discover the stories behind every brushstroke and feel the connection between imagination, passion, and artistic expression.</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto md:my-10">
                <div className="card-body border-2 border-primary rounded-lg">
                    <form onSubmit={handleAddArtwork}>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">User Name</label>
                            <input defaultValue={user?.displayName} type="text" readOnly className="input rounded-full" placeholder="Name" name='user_name' />
                            {/* email */}
                            <label className="label">User Email</label>
                            <input defaultValue={user?.email} type="email" readOnly className="input rounded-full" placeholder="Email" name='user_email' />
                            {/* Photo URL */}
                            <label className="label">Photo URL</label>
                            <input type="text" className="input rounded-full" placeholder="Photo URL" name='photo_url' />
                            {/* Title */}
                            <label className="label">Title</label>
                            <input type="text" className="input rounded-full" placeholder="Photo URL" name='title' />
                            {/* category */}
                            <label className="label">Category</label>
                            <input type="text" className="input rounded-full" placeholder="Category" name='category' />
                            {/* Medium */}
                            <label className="label">Medium</label>
                            <input type="text" className="input rounded-full" placeholder="Medium" name='medium' />
                            {/* Visibility */}
                            <label className="label">Visibility</label>
                            <input type="text" className="input rounded-full" placeholder="Medium" name='Visibility' />
                            {/* Description */}
                            <label className="label">Description</label>
                            <textarea className='description p-2' placeholder='Write Your Description' name='description'></textarea>

                            <button className="btn btn-primary mt-4">Add Artwork</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddArtwork;
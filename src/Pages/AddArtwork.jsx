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


        const newData = { artist_name, email, title, image, category, created_at, description, visibility, medium, like_count: 0, artist_info_photo: user?.photoURL, artist_info_total_artworks: 1 }

        fetch(`https://future-box-server-pi.vercel.app/addartwork`, {
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

            })

    }



    return (
        <div>
            <div className="min-h-screen  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                            Add Your <span className="text-[#16a085]">Artwork</span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Share your creative masterpiece with the world
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-[#16a085]/20">
                        <div className="bg-gradient-to-r from-primary to-secondary p-6">
                            <h2 className="text-2xl font-bold text-white text-center">Artwork Details</h2>
                        </div>

                        <div className="p-8">
                            <form onSubmit={handleAddArtwork}>
                                <fieldset className="fieldset space-y-5">
                                    {/* User Name */}
                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-5 h-5 mr-2 text-[#16a085]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                                User Name
                                            </span>
                                        </label>
                                        <input
                                            defaultValue={user?.displayName}
                                            type="text"
                                            readOnly
                                            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#16a085] focus:border-transparent transition-all duration-200 cursor-not-allowed"
                                            placeholder="Name"
                                            name='user_name'
                                        />
                                    </div>

                                    {/* User Email */}
                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-5 h-5 mr-2 text-[#16a085]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                                User Email
                                            </span>
                                        </label>
                                        <input
                                            defaultValue={user?.email}
                                            type="email"
                                            readOnly
                                            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#16a085] focus:border-transparent transition-all duration-200 cursor-not-allowed"
                                            placeholder="Email"
                                            name='user_email'
                                        />
                                    </div>

                                    {/* Photo URL */}
                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-5 h-5 mr-2 text-[#16a085]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                                </svg>
                                                Photo URL
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#16a085] focus:border-transparent transition-all duration-200"
                                            placeholder="https://example.com/image.jpg"
                                            name='photo_url'
                                        />
                                    </div>

                                    {/* Title */}
                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-5 h-5 mr-2 text-[#16a085]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                                </svg>
                                                Title
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#16a085] focus:border-transparent transition-all duration-200"
                                            placeholder="Enter artwork title"
                                            name='title'
                                        />
                                    </div>

                                    {/* Category */}
                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-5 h-5 mr-2 text-[#16a085]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                                </svg>
                                                Category
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#16a085] focus:border-transparent transition-all duration-200"
                                            placeholder="e.g., Painting, Sculpture, Digital Art"
                                            name='category'
                                        />
                                    </div>

                                    {/* Medium */}
                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-5 h-5 mr-2 text-[#16a085]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                                </svg>
                                                Medium
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#16a085] focus:border-transparent transition-all duration-200"
                                            placeholder="e.g., Oil on Canvas, Watercolor"
                                            name='medium'
                                        />
                                    </div>

                                    {/* Visibility */}
                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-5 h-5 mr-2 text-[#16a085]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                </svg>
                                                Visibility
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#16a085] focus:border-transparent transition-all duration-200"
                                            placeholder="Public or Private"
                                            name='Visibility'
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="form-group">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-5 h-5 mr-2 text-[#16a085]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                                Description
                                            </span>
                                        </label>
                                        <textarea
                                            className='w-full px-4 py-3 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#16a085] focus:border-transparent transition-all duration-200 resize-none min-h-[120px]'
                                            placeholder='Write your artwork description here...'
                                            name='description'
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-[#138f75] hover:to-[#8a1429] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <span className="text-lg">Add Artwork</span>
                                        </button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Your artwork will be reviewed before being published
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddArtwork;
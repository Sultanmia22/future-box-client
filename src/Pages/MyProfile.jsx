import React, { use, useEffect, useRef, useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPalette, FaCalendar, FaEdit, FaSave, FaTimes } from 'react-icons/fa';


import { AuthContext } from '../Auth/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {

    const { user } = use(AuthContext);

    const [total, setTotal] = useState(null)

    const [userInfo,setUserInfo] = useState(null)

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()


    const modelRef = useRef()


    // open modal 
    const handleEditModal = () => {
        modelRef.current.showModal()
    }


    // get total (art,fav,like)
    useEffect(() => {
        const totalArtWork = async () => {

            try {
                const result = await axios.get(`http://localhost:4011/myTotal-artwork/favourite/like/${user?.email}`);
                setTotal(result.data)
            }
            catch (er) {
                console.log(er.message)
            }

        }

        totalArtWork()

    }, [user])

    // update my information
    const handleUpdateInfo = async (data) => {

        const updateInfo = {
            name: data.name,

          /*   email: data.email, */

            phoneNumber: data.phoneNumber,

            location: data.location,

            specialty: data.specialty
        };

        const updateResult = await axios.patch(`http://localhost:4011/user/updateInfo?email=${user?.email}`,updateInfo)
           
        if(updateResult.data.updateRes.modifiedCount){
            toast.success('Updated Succesfully!')
        }

        setUserInfo(updateResult.data.userData)

         modelRef.current.close()
    }

    console.log(userInfo)
    

    return (
        <div className="min-h-screen  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Profile Header Card */}
                <div className="bg-base-100 rounded-3xl shadow-xl p-8 mb-8 border-2 border-primary/20">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Profile Image */}
                        <div className="relative">
                            <img
                                src={user?.photoURL}
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
                            />
                            <button className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full shadow-lg hover:bg-secondary/90 transition-all">
                                <FaEdit size={16} />
                            </button>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                {user?.displayName}
                            </h1>
                            <p className="text-lg text-primary font-semibold mb-3">
                                {userInfo?.specialty}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Passionate about creating beautiful digital artwork and sharing creativity with the world.
                            </p>
                        </div>

                        {/* Edit Profile Button */}
                        <div>
                            <button onClick={handleEditModal} className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Artworks */}
                    <div className="bg-base-100 rounded-2xl shadow-lg p-6 text-center border-2 border-primary/20 hover:border-primary/40 transition-all">
                        <div className="text-4xl font-bold text-primary mb-2">{total?.toalArt}</div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Artworks</p>
                    </div>

                    {/* Favorites */}
                    <div className="bg-base-100 rounded-2xl shadow-lg p-6 text-center border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                        <div className="text-4xl font-bold text-secondary mb-2">{total?.totalFav}</div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Favorites</p>
                    </div>

                    {/* Likes */}
                    <div className="bg-base-100 rounded-2xl shadow-lg p-6 text-center border-2 border-primary/20 hover:border-primary/40 transition-all">
                        <div className="text-4xl font-bold text-primary mb-2">{total?.totalLike}</div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Total Likes</p>
                    </div>
                </div>

                {/* Personal Information */}
                <div className="bg-base-100 rounded-3xl shadow-xl p-8 mb-8 border-2 border-primary/20">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="text-primary">Personal Information</span>
                    </h2>

                    <div className="space-y-5">
                        {/* Email */}
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <FaEnvelope className="text-primary text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                <p className="text-gray-900 dark:text-white font-medium">{user?.email}</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl">
                            <div className="bg-secondary/10 p-3 rounded-full">
                                <FaPhone className="text-secondary text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                <p className="text-gray-900 dark:text-white font-medium">{userInfo? userInfo?.phoneNumber : 'Not Set' }</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <FaMapMarkerAlt className="text-primary text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                <p className="text-gray-900 dark:text-white font-medium">{userInfo? userInfo?.location : 'Not Set' }</p>
                            </div>
                        </div>

                        {/* Specialty */}
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl">
                            <div className="bg-secondary/10 p-3 rounded-full">
                                <FaPalette className="text-secondary text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Specialty</p>
                                <p className="text-gray-900 dark:text-white font-medium">{userInfo? userInfo?.specialty : 'Not Set' }</p>
                            </div>
                        </div>

                        {/* Member Since */}
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <FaCalendar className="text-primary text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
                                <p className="text-gray-900 dark:text-white font-medium">January 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bio Section */}
                <div className="bg-base-100 rounded-3xl shadow-xl p-8 border-2 border-secondary/20">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                        <span className="text-secondary">About Me</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm a passionate digital artist with over 5 years of experience in creating stunning visual content.
                        I specialize in digital illustrations and love experimenting with different styles and techniques.
                        My work has been featured in various online galleries and exhibitions. I believe art is a powerful
                        medium to express emotions and connect with people from all walks of life.
                    </p>
                </div>

            </div>

            {/* Handle Edit Modal  */}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
           
            <dialog ref={modelRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <div className="min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
                        <div className="max-w-4xl mx-auto">

                            {/* Header */}
                            <div className="bg-base-100 rounded-3xl shadow-xl p-8 mb-8 border-2 border-primary/20">
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    Edit Profile
                                </h1>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Update your personal information
                                </p>
                            </div>

                            {/* Edit Form */}
                            <form onSubmit={handleSubmit(handleUpdateInfo)}>
                                <div className="bg-base-100 rounded-3xl shadow-xl p-8 mb-8 border-2 border-primary/20">
                                    <div className="space-y-6">

                                        {/* Name */}
                                        <div className="form-control">
                                            <label className="flex items-center gap-3 mb-3">
                                                <div className="bg-primary/10 p-2 rounded-full">
                                                    <FaUser className="text-primary text-lg" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">Full Name</span>
                                            </label>
                                            <input
                                                {...register('name')}
                                                defaultValue={user?.displayName}
                                                type="text"
                                                className="input input-bordered w-full bg-gradient-to-r from-primary/5 to-transparent border-2 border-primary/20 focus:border-primary focus:outline-none rounded-xl p-4"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="form-control">
                                            <label className="flex items-center gap-3 mb-3">
                                                <div className="bg-secondary/10 p-2 rounded-full">
                                                    <FaEnvelope className="text-secondary text-lg" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">Email</span>
                                            </label>
                                            <input
                                                {...register('email')}
                                                defaultValue={user?.email}
                                                type="email"
                                                className="input input-bordered w-full bg-gradient-to-r from-secondary/5 to-transparent border-2 border-secondary/20 focus:border-secondary focus:outline-none rounded-xl p-4"
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="form-control">
                                            <label className="flex items-center gap-3 mb-3">
                                                <div className="bg-primary/10 p-2 rounded-full">
                                                    <FaPhone className="text-primary text-lg" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">Phone Number</span>
                                            </label>
                                            <input
                                                {...register('phoneNumber')}
                                                type="tel"
                                                className="input input-bordered w-full bg-gradient-to-r from-primary/5 to-transparent border-2 border-primary/20 focus:border-primary focus:outline-none rounded-xl p-4"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>

                                        {/* Location */}
                                        <div className="form-control">
                                            <label className="flex items-center gap-3 mb-3">
                                                <div className="bg-secondary/10 p-2 rounded-full">
                                                    <FaMapMarkerAlt className="text-secondary text-lg" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">Location</span>
                                            </label>
                                            <input
                                                {...register('location')}
                                                type="text"
                                                className="input input-bordered w-full bg-gradient-to-r from-secondary/5 to-transparent border-2 border-secondary/20 focus:border-secondary focus:outline-none rounded-xl p-4"
                                                placeholder="Enter your location"
                                            />
                                        </div>

                                        {/* Specialty */}
                                        <div className="form-control">
                                            <label className="flex items-center gap-3 mb-3">
                                                <div className="bg-primary/10 p-2 rounded-full">
                                                    <FaPalette className="text-primary text-lg" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">Specialty</span>
                                            </label>
                                            <input
                                                {...register('specialty')}
                                                type="text"
                                                className="input input-bordered w-full bg-gradient-to-r from-primary/5 to-transparent border-2 border-primary/20 focus:border-primary focus:outline-none rounded-xl p-4"
                                                placeholder="Enter your specialty"
                                            />
                                        </div>

                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 justify-end">
                                    
                                    <button  type="submit" className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                        <FaSave />
                                        Save Changes
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default MyProfile;
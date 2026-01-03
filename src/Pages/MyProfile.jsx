import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPalette, FaCalendar, FaEdit } from 'react-icons/fa';

const MyProfile = () => {
    return (
        <div className="min-h-screen  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                
                {/* Profile Header Card */}
                <div className="bg-base-100 rounded-3xl shadow-xl p-8 mb-8 border-2 border-primary/20">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Profile Image */}
                        <div className="relative">
                            <img 
                                src="https://i.ibb.co.com/qkFHzmw/user.png" 
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
                                John Doe
                            </h1>
                            <p className="text-lg text-primary font-semibold mb-3">
                                Digital Artist
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Passionate about creating beautiful digital artwork and sharing creativity with the world.
                            </p>
                        </div>

                        {/* Edit Profile Button */}
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Artworks */}
                    <div className="bg-base-100 rounded-2xl shadow-lg p-6 text-center border-2 border-primary/20 hover:border-primary/40 transition-all">
                        <div className="text-4xl font-bold text-primary mb-2">24</div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Artworks</p>
                    </div>

                    {/* Favorites */}
                    <div className="bg-base-100 rounded-2xl shadow-lg p-6 text-center border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                        <div className="text-4xl font-bold text-secondary mb-2">12</div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Favorites</p>
                    </div>

                    {/* Likes */}
                    <div className="bg-base-100 rounded-2xl shadow-lg p-6 text-center border-2 border-primary/20 hover:border-primary/40 transition-all">
                        <div className="text-4xl font-bold text-primary mb-2">156</div>
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
                                <p className="text-gray-900 dark:text-white font-medium">johndoe@example.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl">
                            <div className="bg-secondary/10 p-3 rounded-full">
                                <FaPhone className="text-secondary text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                <p className="text-gray-900 dark:text-white font-medium">+1 (234) 567-890</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <FaMapMarkerAlt className="text-primary text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                <p className="text-gray-900 dark:text-white font-medium">New York, USA</p>
                            </div>
                        </div>

                        {/* Specialty */}
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl">
                            <div className="bg-secondary/10 p-3 rounded-full">
                                <FaPalette className="text-secondary text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Specialty</p>
                                <p className="text-gray-900 dark:text-white font-medium">Digital Art, Illustration</p>
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
        </div>
    );
};

export default MyProfile;
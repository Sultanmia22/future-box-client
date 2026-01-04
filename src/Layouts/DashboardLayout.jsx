import React, { useState } from 'react';
import { FaHome, FaUser, FaImage, FaCog, FaChartBar, FaHeart, FaImages, FaPlusCircle, FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router';

const DashboardLayout = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="flex">
                
                {/* Mobile Toggle */}
                <button 
                    onClick={() => setOpen(!open)}
                    className="lg:hidden fixed top-4 left-4 z-50 bg-primary text-white p-3 rounded-lg"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>

                {/* Overlay */}
                {open && <div onClick={() => setOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-30" />}

                {/* Sidebar */}
                <aside className={`w-64 min-h-screen bg-base-100 border-r-2 border-primary/20 p-6 fixed lg:static z-40 transition-transform ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                    <div className="mb-8 pt-12 lg:pt-0">
                        <Link to='/' className="text-xl text-primary font-bold">AR<span className='text-secondary'>TI</span>FY</Link>
                    </div>
                    
                    <nav className="space-y-2">
                        <NavLink to='/dahsboard/addart' onClick={() => setOpen(false)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition-all text-gray-700 dark:text-gray-300">
                            <FaPlusCircle className="text-primary" />
                            <span>Add Artwork</span>
                        </NavLink>
                        <NavLink to="/dahsboard/mygallery" onClick={() => setOpen(false)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition-all text-gray-700 dark:text-gray-300">
                            <FaImages className="text-secondary" />
                            <span>My Gallery</span>
                        </NavLink>
                        <NavLink to="/dahsboard/myfavourite" onClick={() => setOpen(false)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition-all text-gray-700 dark:text-gray-300">
                            <FaHeart className="text-primary" />
                            <span>My Favourite</span>
                        </NavLink>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 w-full lg:ml-0">
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default DashboardLayout;
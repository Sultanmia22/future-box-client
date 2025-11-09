import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Auth/AuthContext';

const Navbar = () => {
 
    const links = <>
        <NavLink className='nav-text'>Home</NavLink>
        <NavLink className='nav-text'>Explore Artworks</NavLink>
        <NavLink className='nav-text'>Add Artwork</NavLink>
        <NavLink className='nav-text'>My Gallery</NavLink>
        <NavLink className='nav-text'>My Favorites</NavLink>
    </>
    return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className=" text-xl text-primary font-bold">AR<span className='text-[#a01631]'>TI</span>FY</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <div className='flex items-center gap-3'>
        <button className='btn btn-outline border border-primary text-primary hover:bg-primary hover:text-white'> Sign In </button>
        <Link to='/registration' className='btn btn-outline border border-secondary text-secondary hover:bg-secondary hover:text-white'> Sign UP </Link>
    </div>
  </div>
</div>
    );
};

export default Navbar;
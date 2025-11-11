
import { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Auth/AuthContext';
import { toast } from 'react-toastify';


const Navbar = () => {

  const { user, signOutUser } = use(AuthContext)
  const [show, setShow] = useState(false)

  const links = <>
    <NavLink className='nav-text'>Home</NavLink>
    <NavLink to='/exploreArtwork' className='nav-text'>Explore Artworks</NavLink>
    {user && <>
      <NavLink to='/addArt' className='nav-text'>Add Artwork</NavLink>
      <NavLink to='/mygallery' className='nav-text'>My Gallery</NavLink>
      <NavLink to='/myfavourite' className='nav-text'>My Favorites</NavLink>
    </>}
  </>

  const handleSignOut = () => {
    signOutUser()
      .then(res => {
        toast.success('Sign Out Successfully')
      })
      .catch(er => {
        const error = er.message;
        toast.error(error)
      })
  }

  return (
    <div className="navbar bg-base-100 shadow-sm border-b-2 border-primary">
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
      <div className="navbar-end ">
        {
          user ?
            <div className='flex items-center gap-3'  onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
              <div>
                <figure className='border border-secondary rounded-full'>
                  <img src={user?.photoURL} alt="" className='w-10 h-10 p1 rounded-full' />
                </figure>

                {
                  show &&
                  <div className=' absolute bg-white shadow border border-gray-400 px-10 py-2 rounded-lg top-13 right-1 z-10'>
                    <p className='pb-2 text-gray-600 font-medium'> {user?.displayName} </p>
                    <button onClick={handleSignOut} className='btn btn-outline border border-secondary text-secondary hover:bg-secondary hover:text-white'> Sign Out </button>
                  </div>
                }
              </div>
            </div>
            :
            <div className='flex items-center gap-3'>
              <Link to='/login' className='btn btn-outline border border-primary text-primary hover:bg-primary hover:text-white'> Sign In </Link>
              <Link to='/registration' className='btn btn-outline border border-secondary text-secondary hover:bg-secondary hover:text-white'> Sign UP </Link>
            </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
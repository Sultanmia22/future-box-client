import React from 'react';
import { Link } from 'react-router';

const Registration = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen mx-5 py-6'>
            <h2 className=' text-2xl md:text-3xl text-center font-medium text-primary pb-7'> Create, Share, Inspire — Begin Your Artify Journey </h2>
            <p className=' text-xl md:text-2xl pb-4 text-secondary font-bold'> Registration Now! </p>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-primary">
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label text-[16px] text-primary">Name</label>
                        <input type="text" className="input " placeholder="writte your name" name='name' />
                        {/* PHOTO URL */}
                        <label className="label text-[16px] text-primary">Photo URL</label>
                        <input type="text" className="input" placeholder="writte your photo url" name='photourl' />
                        {/* EMAIL */}
                        <label className="label text-[16px] text-primary">Email</label>
                        <input type="email" className="input" placeholder="writte your email" name='email' />
                        {/* PASSWORD */}
                        <label className="label text-[16px] text-primary">Password</label>
                        <input type="password" className="input" placeholder="writte your password" name='password' />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-outline text-secondary hover:bg-secondary border border-secondary hover:text-white mt-4">Registration</button>
                    </fieldset>
                    <p> You have an already account? <Link className='text-primary font-semibold text-center'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { postUserInfo } from '../lib/userPost';

const Registration = () => {
    const { user } = use(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const { creatUser, singInGoogle, updateUserProfile } = use(AuthContext)
    const navigate = useNavigate()


    //! Registration function 
    const handleRegsiter = async (e) => {
        try {
            e.preventDefault()

            const displayName = e.target.name.value;
            const photoURL = e.target.photourl.value;
            const email = e.target.email.value;
            const password = e.target.password.value;

            // console.log({displayName,photoURL,email,password})

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

            if (!passwordRegex.test(password)) {
                toast.error('Must contain uppercase, lowercase letter,and minimum 6 characters')
                return
            }

            //! Creat User 
            const users = await creatUser(email, password)

            const updateUser = await updateUserProfile(displayName, photoURL)

             postUserInfo(users.user)

            toast.success('Registration Successfully')
            e.target.reset()
            navigate('/')

        }
        catch (er) {
            toast.error(er.message)
        }
    }


    /* const postUserInfo = async (user) => {
       const userInfo = {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
       };

       const res = await axios.post('http://localhost:4011/setUserData',userInfo);
       console.log(res)
    } */



    //! Hangle google sign in
    const handleGoogleSignIn = () => {
        singInGoogle()
            .then(res => {
                const users = res.user;
                // console.log(users)
                toast.success('Registration Successfully')
                navigate('/')
            })
            .catch(er => {
                const error = er.message;
                toast.error(error)
            })
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen mx-5 md:mx-0 py-6 md:py-0'>
            <h2 className=' text-2xl md:text-3xl text-center font-medium  pb-7'> Create, Share, Inspire — Begin Your Artify Journey </h2>
            <p className=' text-xl md:text-2xl pb-4 text-secondary font-bold'> Registration Now! </p>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-primary">
                <div className="card-body">
                    <form onSubmit={handleRegsiter}>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label text-[16px] ">Name</label>
                            <input type="text" className="input " placeholder="writte your name" name='name' />
                            {/* PHOTO URL */}
                            <label className="label text-[16px] ">Photo URL</label>
                            <input type="text" className="input" placeholder="writte your photo url" name='photourl' />
                            {/* EMAIL */}
                            <label className="label text-[16px] ">Email</label>
                            <input type="email" className="input" placeholder="writte your email" name='email' />
                            {/* PASSWORD */}
                            <div className='relative'>
                                <label className="label text-[16px] ">Password</label>
                                <input type={showPass ? 'text' : 'password'} className="input" placeholder="writte your password" name='password' />
                                <div onClick={() => setShowPass(!showPass)} className='absolute top-9.5 right-5'>
                                    {showPass === true ? <FaRegEyeSlash /> : <FaRegEye />}
                                </div>
                            </div>

                            <button className="btn btn-outline text-secondary hover:bg-secondary border border-secondary hover:text-white mt-4">Registration</button>
                        </fieldset>
                    </form>
                    <button type='button' onClick={handleGoogleSignIn} className="btn btn-outline text-primary hover:bg-primary border border-primary hover:text-white mt-4"> <FcGoogle size={24} /> Continue With Google </button>
                    <p> You have an already account? <Link to='/login' className='text-primary font-semibold text-center'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
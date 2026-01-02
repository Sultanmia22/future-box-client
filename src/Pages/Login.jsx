import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [showPass,setShowPass] = useState(false)
    const { singInGoogle, loginUser } = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    //! Handle login 
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log({ email, password });

        loginUser(email, password)
            .then(res => {
                const users = res.user;
                toast.success('Login Successfully')
                e.target.reset()
                navigate(location.state ? location.state : '/')
            })
            .catch(er => {
                const error = er.message;
                toast.error(error);
            })
    }

    //! Hangle google sign in
    const handleGoogleSignIn = () => {
        singInGoogle()
            .then(res => {
                const users = res.user;
                // console.log(users)
                toast.success('Registration Successfully')
                navigate(location.state ? location.state : '/')
            })
            .catch(er => {
                const error = er.message;
                toast.error(error)
            })
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen mx-5 md:mx-0 py-6 md:py-0'>
            <h2 className=' text-2xl md:text-3xl text-center font-medium  pb-7'> Welcome Back ! Step into your world of creativity </h2>
            <p className=' text-xl md:text-2xl pb-4 text-secondary font-bold'> Login Now! </p>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-primary">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset>
                            {/* EMAIL */}
                            <label className="label text-base">Email</label>
                            <input type="email" className="input mb-4" placeholder="writte your email" name='email' />
                            
                            {/* PASSWORD */}
                            <div className='relative'>
                                <label className="label text-[16px] ">Password</label>
                                <input type={showPass ? 'text' : 'password'} className="input" placeholder="writte your password" name='password' />
                                <div onClick={() => setShowPass(!showPass)} className='absolute top-9.5 right-5'>
                                    {showPass === true ? <FaRegEyeSlash /> : <FaRegEye />}
                                </div>
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn w-full btn-outline text-secondary hover:bg-secondary border border-secondary hover:text-white my-4">Login</button>
                            <button type='button' onClick={handleGoogleSignIn} className="btn w-full btn-outline text-primary hover:bg-primary border border-primary hover:text-white mt-4"> <FcGoogle size={24} /> Continue With Google </button>
                        </fieldset>
                    </form>
                    <p> You don't have an account? <Link to='/registration' className='text-primary font-semibold text-center'>Registration</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
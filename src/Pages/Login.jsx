import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { singInGoogle, loginUser } = use(AuthContext)
    const navigate = useNavigate()

    //! Handle login 
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log({ email, password });

        loginUser(email, password)
            .then(res => {
                const users = res.user;
                toast.success('Login Successfully')
                e.target.reset()
                navigate('/')
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
                navigate('/')
            })
            .catch(er => {
                const error = er.message;
                toast.error(error)
            })
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen mx-5 md:mx-0 py-6 md:py-0'>
            <h2 className=' text-2xl md:text-3xl text-center font-medium text-primary pb-7'> Welcome Back ! Step into your world of creativity </h2>
            <p className=' text-xl md:text-2xl pb-4 text-secondary font-bold'> Login Now! </p>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-primary">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset>
                            {/* EMAIL */}
                            <label className="label text-[16px] text-primary">Email</label>
                            <input type="email" className="input" placeholder="writte your email" name='email' />
                            {/* PASSWORD */}
                            <label className="label text-[16px] text-primary">Password</label>
                            <input type="password" className="input" placeholder="writte your password" name='password' />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn w-full btn-outline text-secondary hover:bg-secondary border border-secondary hover:text-white mt-4">Login</button>
                            <button type='button' onClick={handleGoogleSignIn} className="btn w-full btn-outline text-primary hover:bg-primary border border-primary hover:text-white mt-4"> Continue With Google </button>
                        </fieldset>
                    </form>
                    <p> You don't have an account? <Link to='/registration' className='text-primary font-semibold text-center'>Registration</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
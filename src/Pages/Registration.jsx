import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';

const Registration = () => {

    const {creatUser,singInGoogle,updateUserProfile} = use(AuthContext)
    const navigate = useNavigate()

    //! Registration function 
    const handleRegsiter = (e) => {
        e.preventDefault()

        const displayName = e.target.name.value;
        const photoURL = e.target.photourl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        // console.log({displayName,photoURL,email,password})

       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

       if(!passwordRegex.test(password)){
        toast.error('Must contain uppercase, lowercase letter,and minimum 6 characters')
        return
       }

        //! Creat User 
        creatUser(email,password)
        .then(res => {
            const users = res.user;
            
            //! Update Profile 
            updateUserProfile(displayName,photoURL)
            .then(res => {

            })
            .catch(er => {

            })

            // console.log(users) 
            toast.success('Registration Successfully')
              e.target.reset()
            navigate('/')
        })
        .catch(er => {
            const error = er.message;
            console.log(error)
            toast.error(error)
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
            <h2 className=' text-2xl md:text-3xl text-center font-medium text-primary pb-7'> Create, Share, Inspire — Begin Your Artify Journey </h2>
            <p className=' text-xl md:text-2xl pb-4 text-secondary font-bold'> Registration Now! </p>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-primary">
                <div className="card-body">
                    <form onSubmit={handleRegsiter}>
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

                            <button className="btn btn-outline text-secondary hover:bg-secondary border border-secondary hover:text-white mt-4">Registration</button>
                        </fieldset>
                    </form>
                    <button type='button' onClick={handleGoogleSignIn} className="btn btn-outline text-primary hover:bg-primary border border-primary hover:text-white mt-4"> Continue With Google </button>
                    <p> You have an already account? <Link to='/login' className='text-primary font-semibold text-center'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
import React from 'react';
import notfoundImg from '../assets/404image.png'
const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <figure>
                    <img src={notfoundImg} alt="" />
                </figure>
                 <h2 className='text-4xl text-primary'>Opps! Page Not Found</h2>
            </div>
           
        </div>
    );
};

export default ErrorPage;
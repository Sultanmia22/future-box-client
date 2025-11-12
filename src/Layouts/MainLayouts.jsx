import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
           <Header/>
            <div className='bg-base-300'>
                  <div className=' min-h-[55vh] max-w-[1600px] mx-auto'> <Outlet/> </div>
            </div>
           <Footer/>
        </div>
    );
};

export default MainLayouts;
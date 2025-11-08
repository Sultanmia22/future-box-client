import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
           <Header/>
           <div className='flex-grow'> <Outlet/> </div>
           <Footer/>
        </div>
    );
};

export default MainLayouts;
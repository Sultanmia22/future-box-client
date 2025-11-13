import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivertRouts = ({children}) => {
   const {user,loading} = use(AuthContext)
   const location = useLocation()
   if(loading){
    return <div className='flex justify-center items-center min-h-screen'> <p>Loading...</p> </div>
   }
   else if(user){
    return children
   }
   else{
    return <Navigate state={location.pathname} to='/login'> </Navigate>
   }
};

export default PrivertRouts;
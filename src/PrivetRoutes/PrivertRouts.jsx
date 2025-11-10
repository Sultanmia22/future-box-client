import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Navigate } from 'react-router';

const PrivertRouts = ({children}) => {
   const {user,loading} = use(AuthContext)
   if(loading){
    return <div className='flex justify-center items-center min-h-screen'> <p>Loading...</p> </div>
   }
   else if(user){
    return children
   }
   else{
    return <Navigate className='/login'> </Navigate>
   }
};

export default PrivertRouts;
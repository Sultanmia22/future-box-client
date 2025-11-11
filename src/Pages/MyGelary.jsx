import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const MyGelary = () => {

    const {user} = use(AuthContext)
    const [myart,setMyArt] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4011/mygallery?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log('after fetch data',data)
            setMyArt(data)
        })
    },[user])

    console.log(myart)

    return (
        <div>
            <h2> my gallery </h2>
        </div>
    );
};

export default MyGelary;
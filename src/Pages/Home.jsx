import React, { useEffect, useState } from 'react';
import Slider from '../Components/Slider';
import MostRecent from '../Components/MostRecent';

const Home = () => {

    const [artworkData,setartWorkData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:4011/artworks`)
        .then(res => res.json())
        .then(data => {
            console.log('after fetch data',data)
            setartWorkData(data)
            setLoading(false)
        })
    },[])

    if(loading){
        return <div className='flex justify-center items-center min-h-screen'> <p>Loading...</p> </div>
    }

    return (
        <div>
           <Slider/>
           <MostRecent artworkData={artworkData} />
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Slider from '../Components/Slider';
import MostRecent from '../Components/MostRecent';
import TopArtist from '../Components/TopArtist';
import Highlist from '../Components/Highlist';
import Loading from '../Components/Loading';

const Home = () => {

    const [artworkData,setartWorkData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:4011/artworks`)
        .then(res => res.json())
        .then(data => {
            // console.log('after fetch data',data)
            setartWorkData(data)
            setLoading(false)
        })
    },[])

    if(loading){
        return <Loading/>
    }

    return (
        <div>
           <Slider/>
           <MostRecent artworkData={artworkData} />
           <TopArtist/>
           <Highlist/>
        </div>
    );
};

export default Home;
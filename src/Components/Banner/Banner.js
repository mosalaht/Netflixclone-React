import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../Axios'


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
            
            setMovie(response.data.results[Math.floor((Math.random() * 10) + 1)])
        })
    }, [])
    return (
        <div style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_butons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner

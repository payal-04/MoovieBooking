import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../../assets/assets';

const AddShows = () => {

const currency = import.meta.env.VITE_CURRENCY 

const[nowPlayingMovies, setNowPlayingMovies] = useState([])
const[selectMovies, setSelectedMovie] = useState(null);
const [dateTimeSelection, setDateTimeSelection] = useState({});
const[dateTimeInput, setDateTimeInput] = useState("");
const[showPrice, setShoePrice] = useState("");

const fetchNowPlayingMovies = async()=>{
  setNowPlayingMovies(dummyShowsData)
};

useEffect(()=>{
  fetchNowPlayingMovies();
},[])


  return (
    <div>
      
    </div>
  )
}

export default AddShows

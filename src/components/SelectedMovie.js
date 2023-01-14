import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import getImageWithUrl from './getImageWithUrl';
import '../SelectedMovie.css'

export default function SelectedMovie(){
    let { id } = useParams(); // the id is getting passed through the url and getting used for this page
    const [movie, setMovie] = useState([]);  
    const [genres,setGenres] = useState()
    const [language,setLanguage] = useState()

    const apiKey = process.env.REACT_APP_TMDB_API_KEY; //Add you API Key here!!!

useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`) //API call for movie details
    .then(({data}) =>{
        try {
            setMovie(data) //save the data
            setGenres(data.genres[0].name) // getes the kind of genres
            setLanguage(data.original_language.toUpperCase()) // language like en gets turned to EN. 
        } catch (error) { //if any error - console.log it
            console.log(error)
        }
    })
}, []);
 
return(
    // display all the movie details
    <div className='showDeatilsOfMovie'>
        <img src={getImageWithUrl(movie.poster_path)}  />
        <div className='imageText'>
            <h1>{movie.title}</h1>
            <h3>Genre: {genres}</h3>
            <h3>Language: {language}</h3>
            <h3>Date: {movie.release_date}</h3>
            <button>Play</button>
        </div>
    </div>
    )
};
import React, {useState} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import '../LandingPage.css'

const LandingPage = () => {
    const [query, setQuery] = useState(''); // users input for movie search
    const [movie, setMovie] = useState([]);
    const apiKey = process.env.REACT_APP_TMDB_API_KEY; //Add you API Key here!!!
    
    const _search = (e) => {
        e.preventDefault(); // prevents the the page change on button click
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(({data}) => {
          setMovie(data.results)  // get data data json data from API and store in state
        })
    };

    return (
        <div>
            <h1 className='header'> Movie Search</h1>
            {/* input field is required and sets the setQuery on change while it only does the API call on submit */}
            <form onSubmit={ (_search) }> 
                <label>
                    <input
                        className='input'
                        type="search"
                        placeholder="Movie"
                        autoFocus
                        required
                        onChange={ (e) => setQuery(e.target.value) }
                    />
                </label>
                <button className='btn'>Search</button>
            </form>


            <div className="contain">
                {movie
                .sort((objA, objB) => Number(objB.popularity) - Number(objA.popularity)) // sort movies by popularity
                .map((movie, index) => { // pass data to MovieCard (reusable component)
                    return (
                        <MovieCard key={index} {...movie} />
                    )
                })}
            </div>
       
        </div>
    );
};
export default LandingPage;
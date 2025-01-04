import React, { useState, useEffect, useMemo, useRef,useContext } from 'react';
import Marqueee from './Marquee';
import { AppThemeContext } from '../App.jsx';

function Data() {
    const ref = useRef(null); 
    const {querySearch, setQuerySearch} = useContext(AppThemeContext);
    const [movies, setMovies] = useState([]);
    const [firstSession, setFirstSession] = useState(true);

    const moviee = localStorage.getItem("movie_query") == null || undefined ? "dragon ball" : localStorage.getItem("movie_query");


    const url = `https://api.themoviedb.org/3/search/movie?query=${moviee}`;
    const popularMoviesURL = "https://api.themoviedb.org/3/movie/popular?language=en-US"

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJjODM5MzE3OTYyMDJmZDhkOTkyNGJmMTU5ODdkZCIsIm5iZiI6MTczNDY0MzQyNy4yMDg5OTk5LCJzdWIiOiI2NzY0OGVlMzg3OWJmNTFjYzBlYmMwYTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3otbMt2GKapHm6NZ-2Qjqm0jIQTks77AaCbIT2EkBmM'
        }
    };
    const sesionClean = localStorage.getItem("firstSession") == "true" ? true : false;
    
    useEffect(() => {
        fetch(sesionClean  ? popularMoviesURL : url, options)
            .then(res => res.json())
            .then(json => {
                if (json.results.length == 0) {
                    window.alert("No se encontraron resultados")
                } else {
                    ref.current.scrollIntoView({ behavior: 'smooth' });
                    setMovies(json.results)
                }
            })
            .catch(err => console.error(err));
    }, [querySearch]);




    const handleSubmit = (e) => {
        e.preventDefault();
        let MOVIE = e.target.movie.value;
        if (MOVIE.length < 1) {
            window.alert("Debes ingresar una película")
            return;
        }
        setQueryMovie(MOVIE);
    };

    return (
        <div>
            <section>
            </section>
            <h3 className="text-6xl font-semibold text-transparent bg-gradient-to-br mb-3.5 from-white to-gray-950 bg-clip-text text-center">{firstSession == true ? "" : "Peliculas Populares"}</h3>
            <div className="grid grid-cols-3 lg:grid-cols-7 xl:grid-cols-8 gap-2 md:grid-cols-5 xl:gap-4 p-6 mb-6" ref={ref}>
                {movies.map((movie) => (
                    <a href={`/movie/${movie.id}`} key={movie.id} className="rounded-2xl p-1">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title} className='object-cover w-full max-w-full h-full max-h-full rounded-2xl' />
                        
                            {/* // Si es mayor a 500 caracteres, corta el texto, si no muestra todo el texto */}
                            {/* <p className='font-light'>{movie.overview.length > 450 ? `${movie.overview.substring(0, 400)} ...` : movie.overview}</p> */}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Data;

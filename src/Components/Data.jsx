import React, { useState, useEffect } from 'react';


function Data () {

    const [queryMovie, setQueryMovie] = useState('');
    const [movies, setMovies] = useState([]);
    const [firstSession, setFirstSession] = useState(true);

    const url = `https://api.themoviedb.org/3/search/movie?query=${queryMovie}`;
    const popularMoviesURL = "https://api.themoviedb.org/3/movie/popular?language=en-US"

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJjODM5MzE3OTYyMDJmZDhkOTkyNGJmMTU5ODdkZCIsIm5iZiI6MTczNDY0MzQyNy4yMDg5OTk5LCJzdWIiOiI2NzY0OGVlMzg3OWJmNTFjYzBlYmMwYTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3otbMt2GKapHm6NZ-2Qjqm0jIQTks77AaCbIT2EkBmM'
        }
    };
    useEffect(() => {
        setFirstSession(false);
        fetch(firstSession === true ? popularMoviesURL : url, options)
            .then(res => res.json())
            .then(json => {
                if(json.results.length == 0){
                    window.alert("No se encontraron resultados")
                }else{
                    setMovies(json.results)
                }
            })
            .catch(err => console.error(err));

    }, [queryMovie]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let MOVIE = e.target.movie.value;
        if(MOVIE.length < 1){
            window.alert("Debes ingresar una película")
            return;
        }
        setQueryMovie(MOVIE);        
    };
    

    return (
        <div>
            <h3 className="text-6xl font-semibold text-transparent bg-gradient-to-br mb-3.5 from-white to-gray-950 bg-clip-text text-center">Busca tus películas favoritas</h3>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-2 justify-center mt-9'>
                    <label class="input input-bordered flex items-center gap-2 back">
                        <input type="text" class="grow" placeholder="Avatar, Vengadores, Titanic, Star Wars .... " name='movie'/>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70">
                            <path
                                fill-rule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clip-rule="evenodd" />
                        </svg>
                    </label>
                    <button type="submit" className='btn back'>Buscar</button>
                </div>
            </form>
            <h3 className="text-6xl font-semibold text-transparent bg-gradient-to-br mb-3.5 from-white to-gray-950 bg-clip-text text-center">{firstSession == true ? "Películas populares " : ""}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 mb-6">
                {movies.map((movie) => (
                    <a href={`/movie/${movie.id}`} key={movie.id} className="card rounded-xl p-2">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title} className='rounded-lg object-cover' />
                        <article className='flex flex-col gap-2 p-4'>
                            <h3 className='font-semibold text-2xl'>{movie.title}</h3>
                            {/* // Si es mayor a 500 caracteres, corta el texto, si no muestra todo el texto */}
                            <p className='font-light'>{movie.overview.length > 450 ? `${movie.overview.substring(0, 400)} ...` : movie.overview}</p>
                        </article>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Data;

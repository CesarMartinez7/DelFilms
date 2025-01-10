import { useState, useEffect,useRef,useContext } from "react";
import { AppThemeContext } from "../App.jsx";


const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export default function DataHook() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const { querySearch, setQuerySearch } = useContext(AppThemeContext);
  const [isEnter, setIsEnter] = useState(false);
  const [movies, setMovies] = useState([]);
  const [firstSession, setFirstSession] = useState(true);
  const [queryMovie, setQueryMovie] = useState(
    localStorage.getItem("movie_query") || ""
  );

  const moviee = localStorage.getItem("movie_query");
  const url = `https://api.themoviedb.org/3/search/movie?query=${moviee}`;
  const popularMoviesURL =
    "https://api.themoviedb.org/3/movie/popular?language=en-US";

  const sesionClean =
    localStorage.getItem("firstSession") === "true" ? true : false;

  useEffect(() => {
    fetch(
      localStorage.getItem("movie_query") === null && sesionClean === true
        ? popularMoviesURL
        : url,
      options
    ).then((resp) => resp.json()).then((json) => {
        if(json.results.length == 0){
            window.alert("No se encontraron resultados")
        }else{
            setMovies(json.results)
        }
    }).catch((err) => console.log(`Tu error es ${err}`))
  }, [querySearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let MOVIE = e.target.movie.value;
    if (MOVIE.length < 1) {
      window.alert("Debes ingresar una película");
      return;
    }
    setQueryMovie(MOVIE);
  };
  return [handleSubmit,movies]

}

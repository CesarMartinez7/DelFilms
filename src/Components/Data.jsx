import React, { useState, useEffect, useMemo, useRef, useContext } from "react";
import Marqueee from "./Marquee";
import { AppThemeContext } from "../App.jsx";
import HoverCard from "./HoverCard.jsx";
import NoImage from "../assets/noImage.webp"


const API_TOKEN = import.meta.env.VITE_API_TOKEN;

function Data() {
  const ref = useRef(null);
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

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };
  const sesionClean =
    localStorage.getItem("firstSession") === "true" ? true : false;

  useEffect(() => {
    fetch(
      localStorage.getItem("movie_query") === null && sesionClean === true
        ? popularMoviesURL
        : url,
      options
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.results.length == 0) {
          window.alert("No se encontraron resultados");
        } else {
          ref.current.scrollIntoView({ behavior: "smooth" });
          setMovies(json.results);
        }
      })
      .catch((err) => console.error(err));
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

  return (
    <div className="-z-0">
      <section className="p-3">
        <h3 className="text-6xl font-semibold text-transparent bg-gradient-to-br mb-3.5 from-white to-gray-950 bg-clip-text text-center">
          {firstSession == true ? "" : "Peliculas Populares"}
        </h3>
        <div
          className="grid grid-cols-3 -z-0 lg:grid-cols-7 xl:grid-cols-9 gap-2 md:grid-cols-5 xl:gap-4 p-6 mb-6"
          ref={ref}
        >
          {movies.map((movie) => (
            <HoverCard data={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Data;

import { Icon } from "@iconify/react";
import { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppThemeContext } from "../App";
import NavbarQueryFetch from "./NavbarQueryFetch";
import ButtonChangeTheme from "./ButtonTheme";



const API_TOKEN = import.meta.env.VITE_API_TOKEN;

function Navbar() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { querySearch, setQuerySearch } = useContext(AppThemeContext);
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState("");

  const opciones = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    mode: "cors",
  };

  const URL = `https://api.themoviedb.org/3/search/movie?query=${movie}`;

  useEffect(() => {
    fetch(URL, opciones)
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, [movie, querySearch, URL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const MOVIEQUERY = e.target.elements.movienav.value;
    localStorage.setItem("movie_query", MOVIEQUERY);
    setQuerySearch(localStorage.getItem("movie_query"));
    navigate("/search");
  };

  return (
    <div className="navbar rounded-2xl back shadow-lg p-0.5 z-50 sticky top-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box z-[1] mt-4 w-52 p-2 shadow back rounded-md"
          >
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/series">Series</a>
            </li>
            <li>
              <Link to={"/about"}>Acerca de</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a
          className=" md:flex font-semibold text-transparent bg-gradient-to-br from-white to-gray-950 bg-clip-text"
          href="/"
        >
          {"DelFilms >.<"}
        </a>
      </div>
      <div className="navbar-end alto">
        <button
          className="dropdown dropdown-bottom dropdown-end alto"
          title="Buscar tu película favorita"
          onClick={() => inputRef.current.focus()}
        >
          <div
            tabIndex={0}
            role="button"
            className="m-1 btn btn-ghost btn-circle"
          >
            <Icon icon="tabler:search" width="22" height="22" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box back w-auto p-2 shadow rounded-lg bg-slate-950 max-h-screen overflow-y-auto alto"
          >
            <li>
              <form onSubmit={handleSubmit} className="alto">
                <input
                  ref={inputRef}
                  autoComplete="true"
                  element="input"
                  name="movienav"
                  type="text"
                  onChange={(e) => {
                    setMovie(e.target.value);
                  }}
                  placeholder="Star Wars, Avengers..."
                  className={
                    "back p-1 px-3 rounded-lg ring-none outline-none focus:ring-0 w-72 min-w-60 max-w-52"
                  }
                />
              </form>
            </li>

            {data.map((movie, index) => (
              <NavbarQueryFetch movie={movie} index={index} key={index} />
            ))}
          </ul>
        </button>

        <ButtonChangeTheme></ButtonChangeTheme>
        <a className="btn btn-ghost btn-circle" href="/favorite">
          <div className="indicator">
            <Icon icon="iconoir:bookmark" width="20" height="20" />
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

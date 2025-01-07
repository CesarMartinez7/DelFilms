import { Icon } from "@iconify/react";
import { useState,useContext, useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppThemeContext } from "../App";
import NavbarQueryFetch from "./NavbarQueryFetch";

const html = document.querySelector("html");

function Navbar() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { isDark, setIsDark, querySearch, setQuerySearch } =
    useContext(AppThemeContext);
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState("");

  const opciones = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJjODM5MzE3OTYyMDJmZDhkOTkyNGJmMTU5ODdkZCIsIm5iZiI6MTczNDY0MzQyNy4yMDg5OTk5LCJzdWIiOiI2NzY0OGVlMzg3OWJmNTFjYzBlYmMwYTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3otbMt2GKapHm6NZ-2Qjqm0jIQTks77AaCbIT2EkBmM",
    },
  };

  const URL = `https://api.themoviedb.org/3/search/movie?query=${movie}`;

  useEffect(() => {
    fetch(URL, opciones)
      .then((response) => response.json())
      .then((data) => setData(data.results));
    console.log(querySearch);
  }, [movie, querySearch, URL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const MOVIEQUERY = e.target.elements.movienav.value;
    localStorage.setItem("movie_query", MOVIEQUERY);
    setQuerySearch(localStorage.getItem("movie_query"));
    navigate("/search");
  };

  return (
    <div className="navbar rounded-2xl back shadow-lg p-2 z-50 ">
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
            className="menu dropdown-content rounded-box z-[1] mt-4 w-52 p-2 shadow back"
          >
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Acerca de</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="text-xl font-semibold text-transparent bg-gradient-to-br from-white to-gray-950 bg-clip-text" href="/">
          {"DelFilms >.<"}
        </a>
      </div>
      <div className="navbar-end alto">
        <div className="dropdown dropdown-bottom dropdown-end alto" onClick={() => inputRef.current.focus()}>
          <div
            tabIndex={0}
            role="button"
            className="m-1 btn btn-ghost btn-circle"
          >
           <Icon icon="tabler:search" width="24" height="24" /> 
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box back w-auto p-2 shadow bg-slate-950 max-h-screen overflow-y-auto alto"
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
                    console.log(movie);
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
        </div>

        <button
          className="btn btn-ghost btn-circle hover:animation- duration-500"
          onClick={() => {
            setIsDark(!isDark);
            html.setAttribute("data-theme", isDark ? "black" : "dark");
          }}
        >
          {isDark ? (
            <Icon icon="solar:sun-2-linear" width="22" height="22" />
          ) : (
            <Icon icon="solar:moon-linear" width="22" height="22" />
          )}
        </button>
        <a className="btn btn-ghost btn-circle" href="/favorite">
          <div className="indicator">
          <Icon icon="iconoir:bookmark" width="22" height="22" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

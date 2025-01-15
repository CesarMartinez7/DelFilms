import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HoverCard from "../Components/HoverCard";
import NoImage from "../assets/noImage.webp";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const opciones = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
  mode: "cors",
};

const HoverCardSeries = ({ show }) => {
  const navigate = useNavigate();
  return (
    <a
      className="relative overflow-hidden shadow-lg group rounded-2xl p-0.5 z-10"
      onClick={() => {
        navigate(`/series/${show?.id}`);
      }}
    >
      <img
        src={
          show?.poster_path === null || undefined
            ? NoImage
            : `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${show?.poster_path}`
        }
        alt={show?.name}
        className="w-full h-full z-0 transition-transform duration-300 ease-in-out group-hover:scale-110 object-cover max-w-full max-h-full rounded-2xl grayscale-1 "
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-4 text-white">
          <h3 className="text-sm md:text-md font-semibold mb-2">
            {show?.name}
          </h3>
          <div className="flex justify-between">
            <p className="text-[10px]">
              <span>{show?.first_air_date}</span>
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default function Series() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const [query, setQuery] = useState(localStorage.getItem("serie_query") || "");
  const URL = `https://api.themoviedb.org/3/search/tv?query=${query}`;
  const [show, setshow] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("serie_query", e.target[0].value);
    setQuery(localStorage.getItem("serie_query"));
    console.log(
      `Este es el query y viene de localStorage${localStorage.getItem(
        "serie_query"
      )}`
    );
  };

  useEffect(() => {
    fetch(URL, opciones)
      .then((respuesta) => respuesta.json())
      .then((showa) => setshow(showa.results));
  }, [query]);

  return (
    <>
      <div className="mt-3">
        <h1 className="font-bold text-2xl">Series router</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            autoComplete="true"
            element="input"
            name="query"
            type="text"
            placeholder="Star Wars, Squid Games..."
            className={
              "back p-1 px-3 rounded-lg ring-none outline-none focus:ring-0 w-72 min-w-60 max-w-52"
            }
          />
        </form>
        <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-col-5 xl:grid-cols-9 gap-4  p-4">
          {show &&
            show.map((show) => <HoverCardSeries show={show} key={show.id}></HoverCardSeries>)}
        </ul>
      </div>
    </>
  );
}

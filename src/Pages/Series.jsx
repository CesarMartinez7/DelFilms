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

const NoTvFound = ({query}) => {
  return(
    <div className="h-screen flex justify-center items-center ">
      <p className="font-bold text-4xl text-center ">No se encontraron resultados de  <strong className="text-white">{query.toUpperCase()}</strong> </p>
    </div>
  )
}

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
  const [show, setShow] = useState([]);

  const handleSubmit = (e) => {
    if(e.target[0].value.length > 0){
      e.preventDefault();
      localStorage.setItem("serie_query", e.target[0].value);
      setQuery(localStorage.getItem("serie_query"));
    }else{
      alert("Por favor inserta texto en en el campo. ;)")
    }
  };

  useEffect(() => {
    fetch(URL, opciones)
      .then((respuesta) => respuesta.json())
      .then((showa) => setShow(showa.results));
      console.log(show.length)
      console.log(show)
  }, [query]);



  return (
    <>
      <div className="mt-7">
        <header className="flex justify-center">

        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            autoComplete="true"
            element="input"
            name="query"
            type="text"
            placeholder="Dexter, Squid Games..."
            className={
              "back p-1 px-3 rounded-lg  ring-none outline-none focus:ring-0 w-2/4 min-w-60 "
            }
          />
        </form>
        </header>
        {show.length === 0 ? <NoTvFound query={query}></NoTvFound> : <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-col-5 xl:grid-cols-9 gap-3 p-4 ">
          { show && show.map((showa) => <HoverCardSeries show={showa} key={showa.id}></HoverCardSeries>) }
        </ul>}
      </div>
    </>
  );
}

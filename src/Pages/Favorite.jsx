import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import Alert from "../Components/Alert";


const API_TOKEN = import.meta.env.VITE_API_TOKEN

const opciones = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${API_TOKEN}`,
  },
};

export default function Favorite({ arrayLocalStorage }) {
  console.log(arrayLocalStorage);
  const [isOpen, setIsOpen] = useState(true);
  const [fetching, setFetching] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleFetching = async (movie) => {
    const URL = `https://api.themoviedb.org/3/movie/${movie}`;
    try {
      const respuesta = await fetch(URL, opciones);
      const data = await respuesta.json();
      setFetching((prev) => {
        // Evitar duplicados verificando si el ID ya está en el estado
        if (!prev.find((item) => item.id === data.id)) {
          return [...prev, data];
        }
        return prev;
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    if (!loaded) {
      arrayLocalStorage.forEach((movie) => {
        handleFetching(movie);
      });
      setLoaded(true); // Marcar como cargado
    }
  }, [arrayLocalStorage, loaded]); // Dependencias adecuadas

  if (fetching.length === 0) {
    return (
      <div className="flex justify-center flex-col items-center h-screen">
        <h3 className="font-bold text-[6rem]">{"T_T"}</h3>
        <h2 className="text-2xl">Sorry, dont have favorite</h2>
      </div>
    );
  } else if (loaded) {
    return (
      <>
        <Alert isOpen={isOpen} setIsOpen={setIsOpen}></Alert>
        <div
          className={
            isOpen ? "p-4 filter grayscale h-screen blur-sm" : "p-4 h-screen"
          }
        >
          <h3 className="font-semibold text-2xl">Tus Favoritos</h3>
          <ul className="p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-3">
            {fetching.map((movie) => (
              <a
                key={movie?.id}
                className=" p-2 rounded"
                href={`/movie/${movie?.id}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto rounded-2xl"
                />
                <h4 className="mt-2 text-center font-semibold">
                  {movie?.title}
                </h4>
                
              </a>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

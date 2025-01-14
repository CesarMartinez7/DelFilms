import { useEffect, useState,useReducer, act } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import Alert from "../Components/Alert";
import noImage from "../assets/noImage.webp"


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
  const [isOpen, setIsOpen] = useState(true);
  const [fetching, setFetching] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [firstSession,setFirstSession] = useState(null)



  useEffect(()=>{
    if(localStorage.getItem("isFirsSession") === "false"){
      setFirstSession(false)
      console.log("Es false")
      localStorage.setItem("isFirsSession", "true")
    }else{
      console.log("Es true")
      setFirstSession(true)
    }
    
  },[])

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
        <h2 className="text-2xl">Sorry, no tienes películas añadidas a favoritos .</h2>
      </div>
    );
  } else if (loaded) {
    return (
      <>
      {firstSession? <Alert isOpen={isOpen} setIsOpen={setIsOpen}></Alert> : <h1>Ya esta en el otro</h1> }
        <div
          className={
            isOpen && firstSession ? "p-4 filter grayscale h-screen blur-[1px] " : "p-4 h-screen"
          }
        >
          <h3 className="font-semibold text-2xl my-7">Tus Favoritos</h3>
          <ul className="p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-8 md:gap-3 gap-1">
            {fetching.map((movie) => (
              <a
                key={movie?.id}
                className=" p-2 rounded"
                href={`/movie/${movie?.id}`}
              >
                <img
                  src={movie.poster_path === null ? noImage : `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }
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

import { useEffect, useState, useReducer, act } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import Alert from "../Components/Alert";
import noImage from "../assets/noImage.webp";
import FavoriteHook from "../Hooks/FavoriteHook";

export default function Favorite({ arrayLocalStorage }) {
  const navigate = useNavigate();
  const [firstSession, setFirstSession] = useState(null);
  const [fetching, loaded, isOpen, setFetching] = FavoriteHook({
    arrayLocalStorage,
  });

  const handleClickDelete = (fetching, movie) => {
    let resultado = fetching.filter((result) => result.id !== movie?.id);
    setFetching(resultado);
    const ids = new Array();
    resultado.map((list) => ids.push(list?.id));
    localStorage.setItem("movieFavorite", JSON.stringify(ids));
  };

  if (fetching.length === 0) {
    return (
      <div className="flex justify-center flex-col items-center h-screen">
        <h3 className="font-bold text-[6rem]">{"T_T"}</h3>
        <h2 className="text-2xl">
          Lo sentimos, no tienes películas añadidas a favoritos .
        </h2>
      </div>
    );
  } else if (loaded) {
    return (
      <>
        <div
          className={
            isOpen && firstSession
              ? "p-4 filter grayscale h-screen blur-[1px] "
              : "p-4 h-screen"
          }
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-2xl my-7">Tus Favoritos</h3>
            <div>
              <button className="btn btn-ghost back" onClick={()=>{
                localStorage.setItem("movieFavorite", "[]")
                console.log(localStorage.getItem("movieFavorite"))
                location.reload()
              }}>Limpiar todo</button>
            </div>
          </div>
          <ul className="p-4 grid grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-9 md:gap-3 gap-1">
            {fetching.map((movie) => (
              <li key={movie?.id} className="p-2">
                <img
                  src={
                    movie.poster_path === null
                      ? noImage
                      : `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                  }
                  alt={movie.title}
                  className="w-full h-auto rounded-2xl"
                  onClick={() => {
                    navigate(`/movie/${movie?.id}`);
                  }}
                />
                <div className="flex justify-between items-center mt-3">
                  <h4 className="font-semibold text-sm">{movie?.title}</h4>
                  <button
                    className="btn btn-sm rounded-lg glass"
                    onClick={() => {
                      handleClickDelete(fetching, movie);
                    }}
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

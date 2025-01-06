import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Breakcumbs from "../Components/Breakcumbs";
import { Icon } from "@iconify/react/dist/iconify.js";
import MenuToolTip from "../Components/MenuTooltip";

const backGround = (data) => {
  const imageneBack = document.querySelector(".imagene");
  if (imageneBack) {
    imageneBack.style.backgroundImage = `radial-gradient(circle, rgba(0, 0, 0, 0.911) 44%, rgba(0,0,0,1) 90%),url('https://image.tmdb.org/t/p/w500${data?.backdrop_path}')`;
  }
};

const Movie = () => {
  
 

  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}`;
  const [data, setData] = useState(null);
  const [movieFavorite, setMovieFavorite] = useState([]);
  const opciones = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJjODM5MzE3OTYyMDJmZDhkOTkyNGJmMTU5ODdkZCIsIm5iZiI6MTczNDY0MzQyNy4yMDg5OTk5LCJzdWIiOiI2NzY0OGVlMzg3OWJmNTFjYzBlYmMwYTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3otbMt2GKapHm6NZ-2Qjqm0jIQTks77AaCbIT2EkBmM",
    },
  };


  const handleAddToFavorites = () => {
    if (data?.id) {
      // Obtener el array actual de favoritos
      const movieArrayFav = JSON.parse(localStorage.getItem("movieFavorite")) || [];
  
      // Agregar el nuevo ID si no está ya en la lista
      if (!movieArrayFav.includes(data.id)) {
        const updatedFavorites = [...movieArrayFav, data.id];
        
        // Actualizar el estado
        setMovieFavorite(updatedFavorites);
        
        // Guardar en localStorage
        localStorage.setItem("movieFavorite", JSON.stringify(updatedFavorites));
        
        console.log("Favoritos actualizados:", updatedFavorites);
        alert("Película añadida a favoritos.");
      } else {
        alert("Esta película ya está en favoritos.");
      }
    }
  };

  useEffect(() => {
    fetch(URL, opciones)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((err) => console.error(err));
  }, [id, URL]);

  return (
    <section>
      <main className="imagene">
        <MenuToolTip />
        <Breakcumbs movie={data?.title} />
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-5 xl:p-12 p-4 md:p-12 mt-12 md:mt-0 ">
          <div className="w-full flex justify-center flex-col gap-1 content-center xl:h-screen bg-i mb-2">
            <div className="text-sm font-    text-gray-300 flex flex-col gap-2">
              <code>{data?.tagline}</code>
            </div>
            <h2 className="text-6xl font-semibold text-transparent mt-1.5 mb-2.5 bg-gradient-to-br from-white to-gray-950 bg-clip-text">
              {data?.title}
            </h2>
            <ul className="mt flex gap-2 flex-wrap flex-row">
              {data?.genres?.map((genre) => (
                <li
                  className="p-2 bg-[#1414147e] w-fit h-fit max-h-fit flex rounded-[99px] justify-center font-light text-sm"
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-wrap text-xl mt-2 mb-2">
              Synopsis
            </h3>
            <button
              className="w-fit h-fit max-h-fit flex justify-center font-light text-sm"
              onClick={handleAddToFavorites}
            >
              <Icon icon="solar:add-circle-broken" width="24" height="24" />
            </button>

            <p className="text-gray-400 text-pretty font-extralight">
              {data?.overview}
            </p>
            <div className="stats stats-vertical lg:stats-horizontal bg-transparent mt-4 shadow">
              <div className="stat">
                <div className="stat-title">Lenguaje</div>
                <div className="stat-value">
                  {data?.original_language.toUpperCase()}
                </div>
                <div className="stat-desc">
                  País de Origen : {data?.origin_country}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Lanzamiento</div>
                <div className="stat-value">{data?.release_date}</div>
                <div className="stat-desc">
                  Popularidad ↗︎: {data?.popularity}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Critica</div>
                <div className="stat-value">{data?.vote_average}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
          <div className="w-full grid place-content-center place-items-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              className="rounded-2xl object-cover shadow-lg hover:shadow-2xl h-4/5 max-h-fit"
            />
          </div>
        </div>
        <div className="w-[90vw] h-[90vh] md:w-[90vw] md:h-[90vh] mx-auto p-4 flex flex-col gap-7 t-5">
          <p className="font-extrabold text-5xl text-center">
            Mirar {data?.title}
          </p>
          <iframe
            src={`https://vidlink.pro/movie/${id}?primaryColor=ff2025&secondaryColor=a2a2a2&iconColor=eefdec&icons=default&player=default&title=true&poster=true&autoplay=false&nextbutton=true`}
            frameBorder="0"
            className="h-full w-full"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </section>
  );
};

export default Movie;

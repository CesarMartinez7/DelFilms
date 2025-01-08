import React from "react";
import { data, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Breakcumbs from "../Components/Breakcumbs";
import { Icon } from "@iconify/react/dist/iconify.js";
import MenuToolTip from "../Components/MenuTooltip";
import Stat from "../Components/Stat";
import NoImage from "../assets/noImage.webp";
import Download from "../Components/Dowload";

// const backGround = (data) => {
//   const imageneBack = document.querySelector(".imagene");
//   if (imageneBack) {
//     imageneBack.style.backgroundImage = `radial-gradient(circle, rgba(0, 0, 0, 0.911) 44%, rgba(0,0,0,1) 90%),url('https://image.tmdb.org/t/p/w500${data?.backdrop_path}')`;
//   }
// };

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const Horas = ({ minutos }) => {
  if (minutos >= 59) {
    let horas = minutos / 60;
    horas = horas.toString();
    return (
      <span>{`${horas.substring(0, 1)}h ${horas.substring(2, 3)}min`}</span>
    );
  } else {
    return <span>{`${minutos}m`}</span>;
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
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const handleAddToFavorites = () => {
    if (data?.id) {
      const movieArrayFav =
        JSON.parse(localStorage.getItem("movieFavorite")) || [];

      if (!movieArrayFav.includes(data.id)) {
        const updatedFavorites = [...movieArrayFav, data.id];

        setMovieFavorite(updatedFavorites);

        // Guardar en mi localStorage 🐒🐒🐒🐒
        localStorage.setItem("movieFavorite", JSON.stringify(updatedFavorites));
        // Cambiar proximamente a alertas o mensajes
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
        setData(json);
      });
  }, [id, URL]);

  return (
    <section>
      <main>
        <MenuToolTip />
        <Breakcumbs movie={data?.title} />
        <div className="text-white grid md:grid-cols-2 gap-5 xl:p-12 p-4 md:p-2 mt-12 md:mt-0  ">
          <div className="w-full grid place-content-center place-items-center ">
            <img
              src={
                data?.poster_path === null || undefined
                  ? NoImage
                  : `https://image.tmdb.org/t/p/w500/${data?.poster_path}`
              }
              className="rounded-2xl object-cover shadow-lg hover:shadow-2xl h-4/5 max-h-fit"
            />
            <Download link={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} className={"btn rounded-md btn-sm py-1 glass"} ></Download> 
          </div>
          <div className="w-full flex justify-center flex-col gap-1 content-center xl:h-screen bg-i mb-2 information">
            <div className="text-sm text-gray-300 flex flex-col gap-2">
              <code>{data?.tagline}</code>
            </div>
            <h2 className="text-4xl  md:text-6xl font-semibold text-transparent mt-1.5 mb-2.5 bg-gradient-to-br from-white to-gray-950 bg-clip-text">
              {data?.title}
            </h2>
            <p className="font-extralight text-sm">
              <Horas minutos={data?.runtime} />
            </p>
            <div className="flex flex-wrap justify-between">
              <div className="flex gap-2">
                <Link
                  className="h-fit max-h-fit flex flex-shrink-3 justify-center font-light text-sm btn btn-wide glass tooltip rounded-xl"
                  to={`/movie/servers/${data?.id}`}
                  data-tip="Play"
                >
                  <Icon icon="tabler:play" width="18" height="18" /> Play
                </Link>
                <button
                  className="w-fit  h-fit max-h-fit flex justify-center font-light text-sm btn btn-sm glass rounded-md tooltip"
                  onClick={handleAddToFavorites}
                  data-tip="Añadir a Favoritos"
                >
                  <Icon icon="solar:heart-outline" width="17" height="17" />{" "}
                  Favoritos
                </button>
              </div>
            </div>
            <h3 className="font-semibold text-wrap text-xl mt-2 mb-2">
              Synopsis
            </h3>

            <p className=" text-gray-400 text-pretty font-extralight">
              {data?.overview}
            </p>
            <h3 className="font-semibold text-wrap text-xl mb-2">Generos</h3>
            <ul className="mt flex gap-2 flex-wrap flex-row">
              {data?.genres?.map((genre) => (
                <li
                  className="p-2  btn btn-sm back w-fit h-fit max-h-fit flex rounded-[99px] justify-center font-light text-sm"
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
            <div className="stats stats-vertical lg:stats-horizontal bg-transparent mt-4 ">
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
        </div>
      </main>
    </section>
  );
};

export default Movie;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import noImage from "../assets/noImage.webp";
import Download from "../Components/Dowload";
import { Icon } from "@iconify/react/dist/iconify.js";
import SerieHook from "../Hooks/SeriesHook";
import Breakcumbs from "../Components/Breakcumbs";


export default function SeriesSearch() {
  const [
    episodio,
    setepisodio,
    seasons,
    setSeasons,
    show,
    setShow,
    handleClickBack,
    handleClickNext,
  ] = SerieHook();

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" p-4 flex flex-col gap-5 bg-transparent">
      <Breakcumbs cast={show?.name} type={"TV"}></Breakcumbs>
      <section className="grid md:grid-cols-2 xl:h-screen">
        <div className="w-full grid place-content-center place-items-center ">
          <img
            src={
              show?.poster_path === null || undefined
                ? NoImage
                : `https://image.tmdb.org/t/p/w500/${show?.poster_path}`
            }
            className="rounded-2xl object-cover shadow-lg hover:shadow-2xl h-4/5 max-h-fit"
          />
          <Download
            link={`https://image.tmdb.org/t/p/w700/${show?.poster_path}`}
            className={"btn rounded-md btn-sm py-1 glass"}
          ></Download>
        </div>
        <div className="w-full flex justify-center flex-col gap-1 content-center xl:h-screen bg-i mb-2 information">
          <code className="font-light">{show?.tagline}</code>
          <h2 className="text-4xl  md:text-6xl font-semibold text-transparent mt-1.5 mb-2.5 bg-gradient-to-br from-white to-gray-950 bg-clip-text">
            {show?.name}
          </h2>
            <p className="font-extralight text-sm">{show?.first_air_date}</p>
          <p>{show?.runtime}</p>
          <div className="flex flex-wrap gap-2">
            <button
              className="btn glass btn-wide rounded-lg"
              onClick={() => {
                navigate(`/series/servers/${show.id}`);
              }}
            >
              <Icon icon="tabler:play" width="18" height="18" /> Play
            </button>
            <button
              className="w-fit  h-fit max-h-fit flex justify-center font-light text-sm btn btn-sm glass rounded-md tooltip"
              data-tip="Añadir a Favoritos"
              onClick={() => {
                let array = JSON.parse(localStorage.getItem("movieFavorite"));
                array.push(show?.id);
                array = JSON.stringify(array);
                localStorage.setItem("movieFavorite", array);
              }}
            >
              <Icon icon="solar:heart-outline" width="17" height="17" />{" "}
              Favoritos
            </button>
          </div>
          <h3 className="font-semibold text-wrap text-xl mt-2 mb-2">
            Synopsis
          </h3>
          <p className=" text-gray-400 text-pretty font-extralight">
            {show?.overview}
          </p>
          <h3 className="font-semibold text-wrap text-xl mb-2">Generos</h3>
          <div>
            <ul className="mt flex gap-2 flex-wrap flex-row z-[-1]">
              {show?.genres?.map((genre) => (
                <li
                  className="p-2  btn btn-sm back w-fit h-fit max-h-fit flex rounded-[99px] justify-center font-light text-sm"
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="stats stats-vertical md:stats-horizontal bg-transparent">
            <div className="stat">
              <div className="stat-title">Lenguaje</div>
              <div className="stat-value">
                {show?.original_language.toUpperCase()}
              </div>
              <div className="stat-desc">País de origen: {show?.origin_country[0] }</div>
            </div>

            <div className="stat">
              <div className="stat-title">Episodios</div>
              <div className="stat-value">{show.number_of_episodes}</div>
              <div className="stat-desc">
                Temporadas: {show?.number_of_seasons}
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Critica</div>
              <div className="stat-value">
                {show?.vote_average.toString().substring(0, 3)}
              </div>
              <div className="stat-desc">Estado: {show?.status}</div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div>
          <h1>
            Temporada {seasons} Episodio {episodio}
          </h1>
          <div className="flex justify-between flex-shrink ">
            <div>
              <details className="dropdown">
                <summary className="btn m-1 back">Temporadas</summary>
                <ul className="menu dropdown-content back  rounded-box z-[1] w-52 p-2 shadow">
                  {show?.seasons.map((season) => (
                    <li
                      className="text-left"
                      onClick={() => {
                        setSeasons(season?.season_number);
                      }}
                    >
                      <button>Temporada {season.season_number}</button>
                    </li>
                  ))}
                </ul>
              </details>
              <details className="dropdown">
                <summary className="btn m-1 back">Episodios</summary>
                <ul className="menu dropdown-content back rounded-box z-[1] w-52 p-2 shadow">
                  {show?.seasons[seasons]?.episode_count &&
                    Array.from({
                      length: show.seasons[seasons].episode_count,
                    }).map((_, i) => <li key={i} onClick={() => {
                      setepisodio(i + 1)
                    }}><button>Episodio {i + 1}</button></li>)}
                </ul>
              </details>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between gap-4 mb-5">
                <button
                  className="btn rounded-lg back z-10"
                  onClick={() => {
                    handleClickBack(seasons);
                  }}
                >
                  <Icon icon="solar:arrow-left-outline" width="24" height="24" /> Anterior
                </button>
                <button
                  className="btn rounded-lg back"
                  onClick={() => {
                    handleClickNext(seasons);
                  }}
                >
                  Siguiente <Icon icon="solar:arrow-right-outline" width="24" height="24" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-transparent">
            <iframe
              src={`https://vidlink.pro/tv/${show?.id}/${seasons}/${episodio}?primaryColor=c0c0c0&secondaryColor=a2a2a2&iconColor=eefdec&icons=default&player=default&title=true&poster=true&autoplay=true&nextbutton=true`}
              frameborder="0"
              allowfullscreen
              className="bg-transparent md:w-full md:h-dvh"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

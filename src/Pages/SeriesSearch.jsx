import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import noImage from "../assets/noImage.webp";
import Download from "../Components/Dowload";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function SeriesSearch() {
  const [incrementCap, setIncrementCap] = useState(1);
  const [seasons, setSeasons] = useState(1);
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=46bc83931796202fd8d9924bf15987dd`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setShow(data));
    console.log(show);
  }, [URL]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-5">
      <section className="grid grid-cols-2 h-screen">
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
          <code className="font-light">{show?.original_name}</code>
          <h2 className="text-4xl  md:text-6xl font-semibold text-transparent mt-1.5 mb-2.5 bg-gradient-to-br from-white to-gray-950 bg-clip-text">
            {show?.name}
          </h2>
          <p>{show?.runtime}</p>
          <button
            className="btn glass btn-wide rounded-lg"
            onClick={() => {
              navigate(`/series/servers/${show.id}`);
            }}
          >
            <Icon icon="tabler:play" width="18" height="18" /> Play
          </button>
          <h3 className="font-semibold text-wrap text-xl mt-2 mb-2">
            Synopsis
          </h3>
          <p className=" text-gray-400 text-pretty font-extralight">
            {show?.overview}
          </p>
          <h3 className="font-semibold text-wrap text-xl mb-2">Generos</h3>
          <ul className="mt flex gap-2 flex-wrap flex-row">
            {show?.genres?.map((genre) => (
              <li
                className="p-2  btn btn-sm back w-fit h-fit max-h-fit flex rounded-[99px] justify-center font-light text-sm"
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
          </ul>
          <div className="stats stats-vertical lg:stats-horizontal bg-transparent">
            <div className="stat">
              <div className="stat-title">Lenguaje</div>
              <div className="stat-value">
                {show?.original_language.toUpperCase()}
              </div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
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
          <details class="dropdown">
            <summary class="btn m-1 back">Seasons</summary>
            <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              {show?.seasons.map((season) => (
                <li className="btn"
                  onClick={() => {
                    setSeasons(season.season_number);
                    window.alert(seasons);
                  }}
                >
                  {season?.season_number}
                </li>
              ))}
            </ul>
          </details>
        </div>
        <iframe
          src={`https://vidlink.pro/tv/${show?.id}/${seasons}/${incrementCap}`}
          frameborder="0"
          allowfullscreen
          width={"70%"}
          className="h-screen bg-transparent"
        ></iframe>
        <div className="flex justify-between mt-5">
          <button
            className="btn rounded-lg glass"
            onClick={() => {
              setIncrementCap((a) => a - 1);
            }}
          >
            Anterior
          </button>
          <button
            className="btn rounded-lg glass"
            onClick={() => {
              setIncrementCap((a) => a + 1);
            }}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

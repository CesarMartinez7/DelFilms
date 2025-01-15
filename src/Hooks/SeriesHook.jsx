import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieHook from "./MovieHook";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const opciones = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
  mode: "cors",
};

export default function SerieHook() {
  const navigate = useNavigate();
  const [episodio, setepisodio] = useState(1);
  const [seasons, setSeasons] = useState(1);
  const [show, setShow] = useState(null);
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/tv/${id}`;

  useEffect(() => {
    fetch(URL, opciones)
      .then((response) => response.json())
      .then((data) => setShow(data));
    setepisodio(1);
  }, [URL, seasons]);
  const handleClickNext = (seasons) => {
    setepisodio((a) => {
      if (a < show?.seasons[seasons].episode_count) {
        return a + 1;
      } else {
        window.alert("Ya no hay mas episodios en esta temporada");
        return a;
      }
    });
  };
  const handleClickBack = (seasons) => {
    setepisodio((a) => a - 1);
  };

  return [episodio, setepisodio, seasons, setSeasons, show, setShow,handleClickBack,handleClickNext];
}

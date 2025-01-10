import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;


export default function MovieHook() {
  const opciones = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };
  
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}`;
  const [data, setData] = useState(null);
  const [movieFavorite, setMovieFavorite] = useState([]);
  useEffect(() => {
    fetch(URL, opciones)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, [id, URL]);
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
  return [id, URL, data, setData, opciones,handleAddToFavorites];
}

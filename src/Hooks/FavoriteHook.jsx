import { useState,useEffect } from "react";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const opciones = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export default function FavoriteHook({arrayLocalStorage}) {
  const [isOpen, setIsOpen] = useState(true);
  const [fetching, setFetching] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleFetching = async (movie) => {
    const URL = `https://api.themoviedb.org/3/movie/${movie}`;
    try {
      const respuesta = await fetch(URL, opciones);
      const data = await respuesta.json();
      setFetching((prev) => {
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
  }, [arrayLocalStorage, loaded]);
  return [fetching, loaded, isOpen,setFetching];
}

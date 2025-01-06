import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const opciones = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJjODM5MzE3OTYyMDJmZDhkOTkyNGJmMTU5ODdkZCIsIm5iZiI6MTczNDY0MzQyNy4yMDg5OTk5LCJzdWIiOiI2NzY0OGVlMzg3OWJmNTFjYzBlYmMwYTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3otbMt2GKapHm6NZ-2Qjqm0jIQTks77AaCbIT2EkBmM",
  },
};

export default function Favorite({ arrayLocalStorage }) {
    const navigate = useNavigate()
  const [fetching, setFetching] = useState([]); // Estado inicial vacío
  const [loaded, setLoaded] = useState(false); // Control para evitar solicitudes repetidas

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
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl">No Favorite</h1>
      </div>
    );
  } else {
    return (
      <div className="p-4">
        <h3 className="font-semibold text-2xl">Tus Favoritos</h3>
        <ul className="p-4 grid grid-cols-9 gap-3">
          {fetching.map((movie) => (
            <a key={movie.id} className=" p-2 rounded" onClick={(e)=>
                navigate(`/movie/${movie.id}`)
            }>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded-2xl"
              />
              <h4 className="mt-2 text-center font-semibold">{movie.title}</h4>
            </a>
          ))}
        </ul>
      </div>
    );
  }
}

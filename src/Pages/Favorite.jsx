import { useEffect, useState } from "react";

const opciones = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJjODM5MzE3OTYyMDJmZDhkOTkyNGJmMTU5ODdkZCIsIm5iZiI6MTczNDY0MzQyNy4yMDg5OTk5LCJzdWIiOiI2NzY0OGVlMzg3OWJmNTFjYzBlYmMwYTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3otbMt2GKapHm6NZ-2Qjqm0jIQTks77AaCbIT2EkBmM",
  },
};

export default function Favorite({ arrayLocalStorage }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await Promise.all(
        arrayLocalStorage.map(async (movieId) => {
          const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=46bc83931796202fd8d9924bf15987dd`;
          const response = await fetch(URL, opciones);
          const data = await response.json();
          return data;
        })
      );
      setMovies(fetchedMovies);
    };

    fetchMovies().catch((err) => console.error(err));
  }, [arrayLocalStorage]);

  if (arrayLocalStorage.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl">No Favorite</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h3 className="font-semibold text-2xl">Tus Favoritos</h3>
      <ul className="p-4 grid grid-cols-5 gap-3">
        {movies.map((movie) => (
          <li key={movie.id} className="flex bg-gray-950 w-full rounded-2xl flex-col h-20">
            <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
            <h2>{movie?.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
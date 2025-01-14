import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

export default function SeriesSearch() {
    const [movie,setMovie] = useState()
    const { id } = useParams();
    const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=46bc83931796202fd8d9924bf15987dd`
  useEffect(() => {
    fetch(URL).then(respuesta => respuesta.json()).then(data => setMovie(data))
    console.log(id);
  }, []);
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}.jpg`} alt="" />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SeriesSearch() {
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=46bc83931796202fd8d9924bf15987dd`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [URL]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="grid grid-cols-2">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
            alt={show.name}
          />
        </div>
        <div>
          <h3>{show.name}</h3>
          <p>{show.first_air_date}</p>
          <p>{show.overview}</p>
          <p>Seasons: {show.number_of_seasons}</p>
          <p>Episodes: {show.number_of_episodes}</p>
          <p>Status: {show.status}</p>
          <button
            className="btn"
            onClick={() => {
              navigate(`/series/servers/${show.id}`);
            }}
          >
            Ver
          </button>
        </div>
      </section>
    </div>
  );
}

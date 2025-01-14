import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Series() {

  const navigate = useNavigate()
  const inputRef = useRef();
  const [query,setQuery] = useState("")
  const URL = `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=46bc83931796202fd8d9924bf15987dd`;
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target[0].value)
    console.log(e.target[0].value)
  };

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((dataa) => setData(dataa.results));
  }, [query]);

  return (
    <>
      <div>
        <h1>HELLO SERIES API</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} className="back p-2 " name="query" />
        </form>
        <ul className="grid grid-cols-10 gap-4  p-4">
          {data &&
            data.map((movie) => (
              <li key={movie?.id} onClick={() => {
                navigate(`/series/${movie?.id}`)
              }} >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}.jpg`}
                  alt=""
                  className="rounded-lg"
                />
                <h2>{movie?.name}</h2>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

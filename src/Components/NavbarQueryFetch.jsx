import { useNavigate } from "react-router-dom"


export default function NavbarQueryFetch({movie, index}) {
  const navigate = useNavigate()
    return(
        <li key={index} className="alto" >
                <a className="flex items-center content-center alto" title={movie?.overview} onClick={(e) => {
                  e.preventDefault()
                  navigate(`/movie/${movie.id}`)
                }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path}`} className="h-14 w-10 rounded-lg object-cover"
                  />
                  <p>{movie.title}</p>
                </a>
              </li>
    )
}
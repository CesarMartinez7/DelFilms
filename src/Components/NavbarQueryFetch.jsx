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
                   src={movie?.poster_path === null || undefined ? "https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.avif"  : `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} className="h-14 w-10 rounded-lg object-cover"
                  />
                  <p>{movie.title}</p>
                </a>
              </li>
    )
}

export default function NavbarQueryFetch({movie, index}) {
    return(
        <li key={index} >
                <a href={`/movie/${movie.id}`} className="flex items-center content-center" title={movie?.overview}>
                  <img
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path}`} className="h-14 w-10 rounded-lg object-cover"
                  />
                  <p>{movie.title}</p>
                </a>
              </li>
    )
}
import { useEffect,useState } from "react";


const opciones = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJjODM5MzE3OTYyMDJmZDhkOTkyNGJmMTU5ODdkZCIsIm5iZiI6MTczNDY0MzQyNy4yMDg5OTk5LCJzdWIiOiI2NzY0OGVlMzg3OWJmNTFjYzBlYmMwYTMiLCJzY29wZXMiOlsi   YXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3otbMt2GKapHm6NZ-2Qjqm0jIQTks77AaCbIT2EkBmM",
    },
  }



export default function Favorite({arrayLocalStorage}) {
    const [movieData,setMovieData] = useState(null)
    const [fetching,setFetching] = useState([])
    useEffect(()=>{
        arrayLocalStorage.map((movie)=>{
            const URL = `https://api.themoviedb.org/3/movie/${movie}?api_key=46bc83931796202fd8d9924bf15987dd`
            fetch(URL,opciones).then(respuesta => respuesta.json()).then(data => fetching.push(data))
            console.log("Este es el fetch")
            console.log(fetching)
        })
    },[movieData,arrayLocalStorage])
    
        {if(fetching.length === 0){
            return (
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl">No Favorite</h1>
                </div>
            )
        }}
        return(
            <div className="p-4">
                <h3 className="font-semibold text-2xl">Tus Favoritos</h3>
            <ul className="p-4 grid grid-cols-5 gap-3">
                {fetching.map((movie) => (
                    <li className="flex bg-gray-950 w-full rounded-2xl flex-col h-20 ">
                            <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                            <h2>{movie?.title}</h2>
                    </li>
                    
                ))}
            </ul>

            <ul>
                <li>
                    <img src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}  alt="" />
                </li>
            </ul>

            </div>
        )
    ;
}
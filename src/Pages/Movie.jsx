import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from './Footer'

const Movie = () => {
    const { id } = useParams();
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=46bc83931796202fd8d9924bf15987dd`;
    const [data, setData] = useState(null);
    const opciones = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJjODM5MzE3OTYyMDJmZDhkOTkyNGJmMTU5ODdkZCIsIm5iZiI6MTczNDY0MzQyNy4yMDg5OTk5LCJzdWIiOiI2NzY0OGVlMzg3OWJmNTFjYzBlYmMwYTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3otbMt2GKapHm6NZ-2Qjqm0jIQTks77AaCbIT2EkBmM'
        }
    }

    useEffect(() => {
        fetch(URL,opciones)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
            })
            .catch((err) => console.error(err));
    }, [id, URL]);

    return (
        <>
        <main>
            <div className="text-white card grid grid-cols-1 md:grid-cols-2 gap-5 xl:p-12 p-6 ">
                <div className="w-full flex justify-center flex-col gap-1 content-center xl:h-screen">
                    <h1 className="text-gray-300 font-bold text-5xl mb-3 mt-3">{data?.title}</h1>
                    <h3 className="font-semibold text-wrap text-xl">Vista general</h3>
                    <p className="text-gray-400 text-pretty">{data?.overview}</p>
                    <h1 className="font-semibold">Etiquetas</h1>
                    <ul className="mt-3 grid sm:grid-cols-5 gap-2 xl:grid-cols-5">
                        {data?.genres?.map((genre) => (
                            <li className="p-2 back flex rounded-[999px] justify-center " key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <p>{data?.popularity}</p>
                    <p>{data?.release_date}</p>
                    <p>{data?.status}</p>
                    <p>{data?.tagline}</p>
                    <div className="p-2 rounded-[999px] back">{data?.vote_average}</div>
                </div>
                <div className="w-full grid place-content-center">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
            <div className="w-[90vw] h-[90vh] md:w-[90vw] md:h-[90vh] mx-auto p-4 mt-5">
                <iframe
                    src={`https://vidlink.pro/movie/${id}?primaryColor=ff2025&secondaryColor=a2a2a2&iconColor=eefdec&icons=default&player=default&title=true&poster=true&autoplay=false&nextbutton=true`}
                    frameborder="0"
                    className="h-full w-full"
                    allowFullScreen
                ></iframe>
            </div>
        </main>
        </>
    );
};

export default Movie;

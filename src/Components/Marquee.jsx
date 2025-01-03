import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import datadeImagenes from "../Mock/marque1.json";
import dataMockMarquee2 from "../Mock/marque2.json";
import { replace, useHref, useNavigate } from "react-router-dom";

const Marqueee = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 justify-center mt-9">
      <Marquee
        fade={true}
        direction="left"
        reverse={true}
        pauseOnHover={true}
        className="gap-[1rem] [--duration:80s] "
        innerClassName="gap-[1rem] [--gap:1rem]"
      >
        {datadeImagenes.results.map((data, index) => (
          <div
            key={index}
            className="text-white child text-3xl w-24 xl:w-52 xl:h-30"
            onClick={() => navigate(`/movie/${data.id}`)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              alt=""
              className="object-cover w-full max-w-full h-full max-h-full rounded-2xl"
            />
          </div>
        ))}
      </Marquee>
      <Marquee
        fade={true}
        direction="left"
        reverse={false}
        pauseOnHover={true}
        className="gap-[1rem] [--duration:80s]"
        innerClassName="gap-[1rem] [--gap:1rem]"
      >
        {dataMockMarquee2.results.map((data, index) => (
          <a
            key={index}
            className="text-white child text-3xl w-24 xl:w-52 xl:h-30"
            onClick={() => navigate(`/movie/${data.id}`)} 
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              alt=""
              className="object-cover w-full max-w-full h-full max-h-full rounded-2xl "
            />
          </a>
        ))}
      </Marquee>
    </div>
  );
};

const Marqueee2 = () => {
  return (
    <div className="flex flex-col gap-8 justify-center mt-9">
      <Marquee
        fade={true}
        direction="left"
        reverse={true}
        pauseOnHover={true}
        className="gap-[1rem] [--duration:80s] "
        innerClassName="gap-[1rem] [--gap:1rem]"
      >
        {datadeImagenes.results.map((data, index) => (
          <div key={index} className="text-white child text-3xl w-52 h-30">
            <img
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              alt=""
              className="object-cover w-full max-w-full h-full max-h-full rounded-2xl"
            />
          </div>
        ))}
      </Marquee>
      <Marquee
        fade={true}
        direction="left"
        reverse={false}
        pauseOnHover={true}
        className="gap-[1rem] [--duration:80s]"
        innerClassName="gap-[1rem] [--gap:1rem]"
      >
        {dataMockMarquee2.results.map((data, index) => (
          <div key={index} className="text-white child text-3xl w-52 h-30">
            <img
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              alt=""
              className="object-cover w-full max-w-full h-full max-h-full rounded-2xl"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marqueee;

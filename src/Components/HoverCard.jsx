import { useNavigate } from "react-router-dom"

export default function HoverCard({data}) {
  const handleAnchor = (e) => {
    navigate(`/movie/${data?.id}`);
  }
  const navigate = useNavigate();
  return (
    <a className="relative overflow-hidden shadow-lg group rounded-2xl p-0.5 z-10" onClick={handleAnchor}>
    <img
      src={data?.poster_path === null || undefined ? "https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.avif"  :`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data?.poster_path}` }
      alt={data?.title}
      className="w-full h-full z-0 transition-transform duration-300 ease-in-out group-hover:scale-110 object-cover max-w-full max-h-full rounded-2xl"
    />
    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="p-4 text-white">
      <h3 className="text-sm md:text-md font-bold mb-2">{data?.title}</h3>
      <p className="text-sm flex justify-between"><span>{data?.release_date}</span></p>
      </div>
    </div>
    </a>
  )
}

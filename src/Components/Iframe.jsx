export default function IframeMovie({ id }) {
  return (
    <div className="w-[90vw] h-[90vh] md:w-[90vw] md:h-[90vh] mx-auto p-4 flex flex-col gap-7 t-5">
      <p className="font-extrabold text-5xl text-center">
        Mirar {data?.title}
        <iframe
          src={`https://vidlink.pro/movie/${id}?primaryColor=ff2025&secondaryColor=a2a2a2&iconColor=eefdec&icons=default&player=default&title=true&poster=true&autoplay=false&nextbutton=true`}
          frameBorder="0"
          className="h-full w-full"
          allowFullScreen
        ></iframe>
      </p>
    </div>
  );
}

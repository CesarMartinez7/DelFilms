import GridMain from "./GridMain";
import Marqueee from "../Components/Marquee";

function Main() {
  return (
    <div className=" grid grid-cols-1 xl:grid-cols-2 xl:p-20 lg:p-20 w-full">
      <div className="flex flex-col items-center justify-center gap-2 h-screen md:h-screen  text-center lg:text-left lg:items-start">
        <h1 className="text-5xl lg:text-7xl font-semibold text-transparent bg-gradient-to-br from-white to-gray-950 bg-clip-text">
          {"DelFilms >.<"}
        </h1>
        <h2 className="text-xl lg:text-4xl xl:7xl bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent w-[28rem]">
          Descubre, disfruta y comparte películas.
        </h2>
        <p className="text-sm md:text-md lg:text-lg xl:text-1xl text-gray-500 font-extralight">
          Explora y disfruta tus películas favoritas.
        </p>
      </div>
      <Marqueee></Marqueee>
    </div>
  );
}

export default Main;

export function Main2() {
  return (
    <div className="flex justify-center">
    <div className="collapse collapse-plus back  p-9 rounded-lg w-[40rem] ">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title text-xl font-medium">
        Créditos y Origen de Datos
      </div>
      <div className="collapse-content">
        <p className="font-light">Esta página utiliza la API de The Movie Database (TMDb) para obtener información y datos relacionados con películas, series y actores. Todas las consultas realizadas, como búsquedas de títulos, detalles de contenido, y visualización de imágenes o descripciones, son gestionadas a través de dicha API.</p>
      </div>
    </div>

    </div>
  );
}

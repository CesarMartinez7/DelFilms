function Main() {
  return (
    <div className="md:mt-0 h-screen grid grid-cols-1 xl:grid-cols-2 xl:p-20 lg:p-20 p-5">
      <div className="flex flex-col items-center justify-center gap-2 h-screen md:h-screen  text-center lg:text-left lg:items-start">
        <h1 className="text-5xl lg:text-7xl font-semibold text-transparent bg-gradient-to-br from-white to-gray-950 bg-clip-text">
          {'DelFilms >.<'}
        </h1>
        <h2 className="text-xl lg:text-4xl l:7xl  bg-gradient-to-br from-white to-gray-950 bg-clip-text text-transparent">
          Descubre, disfruta y comparte películas.
        </h2>
        <p className="text-sm md:text-md lg:text-lg xl:text-1xl text-gray-500 font-extralight">
          Explora y disfruta tus películas favoritas.
        </p>
      </div>
      <div className="flex justify-center items-center"></div>
    </div>
  );
}

export default Main;

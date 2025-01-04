function Main() {
  return (
    <div className="md:mt-0 h-screen grid grid-cols-1 xl:grid-cols-2 xl:p-20 lg:p-20 p-5">
      <div className="flex flex-col items-center justify-center gap-2 h-screen md:h-auto  text-center lg:text-left lg:items-start">
        <h1 className="text-7xl font-semibold text-transparent bg-gradient-to-br from-white to-gray-950 bg-clip-text">
          {'DelFilms >.<'}
        </h1>
        <h2 className="text-4xl md:text-6xl min-h-[3rem] max-w-[26rem] md:max-w-[35rem] md:w-[50rem] md:h-32  text-center lg:text-left  bg-gradient-to-br from-white to-gray-950 bg-clip-text text-transparent">
          Descubre, disfruta y comparte películas.
        </h2>
        <p className="text-sm md:text-lg lg:text-xl xl:text-1xl text-gray-500 font-extralight">
          Explora y disfruta tus películas favoritas.
        </p>
      </div>
      <div className="flex justify-center items-center"></div>
    </div>
  );
}

export default Main;

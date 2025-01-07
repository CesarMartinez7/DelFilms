
import Main from "../Components/Main";
import Marqueee from "../Components/Marquee";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:gap-11">
        <Main />
        <div className="flex justify-center">
        <h2 className="text-2xl lg:text-5xl font-semibold text-transparent bg-gradient-to-br from-white to-gray-950 bg-clip-text ">Películas Populares</h2>
        </div>
        <Marqueee></Marqueee>
      </div>
    </>
  );
};

export default Home;

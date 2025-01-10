import Main from "../Components/Main";
import Marqueee from "../Components/Marquee";
import { Main2 } from "../Components/Main";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:gap-11 gap-28">
        <Main />
        <Main2></Main2>
      </div>
    </>
  );
};

export default Home;

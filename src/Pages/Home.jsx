
import Data from "../Components/Data";
import Main from "../Components/Main";
import Marqueee from "../Components/Marquee";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-36">
        <Main />
        <Marqueee></Marqueee>
        <Data />
      </div>
    </>
  );
};

export default Home;

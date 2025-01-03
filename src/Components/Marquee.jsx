import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import cisnenegro from "../assets/cisnenegro.webp";
import dexter from "../assets/dexter.webp";
import sopranos from "../assets/sopranos.webp";
import { data } from "react-router-dom";
const dataImages = [
    {
        image: cisnenegro,
    },
    {
        image: dexter,
    },
    {
        image: sopranos,
    }
];



const Marqueee = () => {
    return(
        <Marquee fade={true} direction="left" reverse={false} pauseOnHover={true} className="gap-[1rem] [--duration:14s]"
        innerClassName="gap-[1rem] [--gap:1rem]" >
            {dataImages.map((data,index) => (
                <div key={index} className="text-white child text-3xl w-52 h-30 ">
                    <img src={data.image} alt="" className="object-cover w-full max-w-full h-full max-h-full rounded-2xl"/>
                </div>
            ))}
        </Marquee>
    )
}

export default Marqueee
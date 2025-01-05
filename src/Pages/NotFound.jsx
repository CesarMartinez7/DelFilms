import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
    const navigation = useNavigate()
  return (
    <section className="flex justify-center flex-col gap-3 items-center h-screen">
      <h3 className="font-bold text-[6rem]">{"T_T"}</h3>
      <h1 className="text-2xl">Sorry, we can't find this page.</h1>
      <div className="relative mt-4 inline-grid gap-3 grid-cols-3">
        <button className="btn" onClick={()=>{
            navigation("/")
        }}>
        <Icon icon="iconoir:home" width="24" height="24" />
            Inicio</button>
        <button className="btn btn-neutral"  onClick={()=>{
            navigation("https://github.com/CesarMartinez7")
        }}>
        <Icon icon="iconoir:github" width="24" height="24" />
        Github
        </button>
        <button className="btn btn-primary"  onClick={()=>{
            navigation("/search")
        }}>Busqueda</button>
      </div>
    </section>
  );
}

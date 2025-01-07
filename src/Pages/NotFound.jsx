import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";
export default function NotFound() {
    const navigation = useNavigate()
  return (
    <section className="flex justify-center flex-col gap-3 items-center h-screen">
      <h3 className="font-bold text-[6rem]">{"T_T"}</h3>
      <h2 className="text-2xl">Sorry, we can't find this page.</h2>
      <div className="relative mt-4 inline-grid gap-3 grid-cols-3">
        <button className="btn" onClick={()=>{
            navigation("/")
        }}>
        <Icon icon="iconoir:home" width="24" height="24" />
            Inicio</button>
        <button className="btn btn-active btn-ghost "  onClick={()=>{
            navigation("/search")
        }}>
          <Icon icon="tabler:search" width="18" height="18" />
          Busqueda</button>
        <Link to={"https://github.com/CesarMartinez7/"} className="btn btn-neutral" target="_blank">
        <Icon icon="tabler:brand-github" width="24" height="24" />
          Github
        </Link>
      </div>
    </section>
  );
}

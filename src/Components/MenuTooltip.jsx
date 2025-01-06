import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";


export default function MenuToolTip() {
  const navigate = useNavigate();
  return (
    <ul className="menu menu-horizontal fixed toCenter bg-base-200 rounded-box mt-6 back ">
      <li>
        <button
          className="tooltip"
          data-tip="Inicio"
          onClick={() => {
            navigate("/");
          }}
        >
          <Icon icon="iconoir:home" width="18" height="18" />
        </button>
      </li>
      <li>
        <a className="tooltip" data-tip="Play">
        <Icon icon="tabler:play" width="18" height="18" />
        </a>
      </li>
      <li>
        <a className="tooltip" data-tip="Favoritos" href="/favorite" >
        <Icon icon="iconoir:bookmark" width="18" height="18" />
        </a>
      </li>
      <li>
        <a className="tooltip" data-tip="Copiar Link" onClick={()=>{
          const urlLocal = window.location
          navigator.clipboard.writeText(urlLocal).then(()=>{
            console.log("texto copiado")
          }).then( err => {
            console.log(err)
            console.log("Error arriba")
          })
        }}>
        <Icon icon="solar:share-bold" width="18" height="18" />
        </a>
      </li>
    </ul>
  );
}

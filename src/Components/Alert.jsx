
import { Icon } from "@iconify/react/dist/iconify.js"

function Alert ({isOpen,setIsOpen}) {
    const handleCLick = () => setIsOpen(false)
  return(
    <div role="alert" className={isOpen ? "alert min-w-full animation-alert rounded-xl z-50" : "hidden" }>
          <Icon icon="solar:shield-warning-bold" width="24" height="24" />
          <span>Tus favoritos se guardan en localStorage por lo cual no siempre son persistentes, si no que solamente en el navegador.</span>
          <button onClick={handleCLick}>
          <Icon icon="solar:eye-closed-bold" width="18" height="18" />
          </button>
        </div>
  )
}


export default Alert
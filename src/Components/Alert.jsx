import { Icon } from "@iconify/react/dist/iconify.js";

function Alert({ isOpen, setIsOpen }) {
  const handleCLick = () => setIsOpen(false);
  return (
    <div
      role="alert"
      className={
        isOpen
          ? "chat  flex justify-end chat-start min-w-full animation-alert hover:animation-0 rounded-xl z-50"
          : "hidden"
      }
    >
      <div className="chat chat-end">
        <div className="chat-bubble rounded-xl back">
          <div className="flex justify-end ">
            <button className="btn btn-ghost btn-circle" onClick={handleCLick}>
            <Icon icon="mingcute:close-line" width="15" height="15" />
            </button>
          </div>
          <h3>¡Tus favoritos han sido guardados!</h3>
          <plaintext className="text-wrap">
            Se almacenan en el navegador usando localStorage, lo que te permite
            acceder a ellos incluso después de recargar la página.
          </plaintext>
        </div>
      </div>
    </div>
  );
}

export default Alert;

import { useContext } from "react";
import { AppThemeContext } from "../App";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ButtonChangeTheme() {
  const { isDark, setIsDark } = useContext(AppThemeContext);

  const handleClick = () => {
    setIsDark(!isDark);
    html.setAttribute("data-theme", isDark ? "black" : "dark");
  };

  return (
    <button
      className="btn btn-ghost btn-circle hover:animation- duration-500"
      onClick={handleClick}
    >
      {isDark ? (
        <Icon icon="solar:sun-2-linear" width="22" height="22" />
      ) : (
        <Icon icon="solar:moon-linear" width="22" height="22" />
      )}
    </button>
  );
}

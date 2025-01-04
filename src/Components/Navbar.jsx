import { useState } from "react";
import { Icon } from "@iconify/react";
import { AppThemeContext } from "../App";
import { useContext, useEffect } from "react";

const html = document.querySelector("html");

function Navbar() {
  const { isDark, setIsDark, querySearch, setQuerySearch } =
    useContext(AppThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(querySearch);
  }, [querySearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.movienav.value;
    setQuerySearch(query);
  };

  return (
    <div className="navbar  rounded-2xl back shadow-lg p-2 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box z-[1] mt-4 w-52 p-2 shadow back"
          >
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Acerca de</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl" href="/">
          {"DelTi >.<"}
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom dropdown-end ">
          <div tabIndex={0} role="button" className="m-1 btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box back z-[1] w-52 p-2 shadow"
          >
            <li>
              <form onSubmit={handleSubmit}>
                <input
                  name="movienav"
                  type="text"
                  placeholder="Star Wars, Avengers..."
                  className={
                    "back p-1 px-5 w-full rounded-lg ring-none outline-none ring-1"
                  }
                />
              </form>
            </li>
          </ul>
        </div>

        <button
          className="btn btn-ghost btn-circle hover:animation- duration-500"
          onClick={() => {
            setIsDark(!isDark);
            html.setAttribute("data-theme", isDark ? "black" : "dark");
          }}
        >
          {isDark ? (
            <Icon icon="solar:sun-2-bold" width="24" height="24" />
          ) : (
            <Icon icon="solar:moon-bold" width="20" height="21" />
          )}
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

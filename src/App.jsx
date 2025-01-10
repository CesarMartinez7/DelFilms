import { useState, useEffect, Suspense, lazy, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Data from "./Components/Data"; // Componente de la Ruta Search
import Rutas from "./Routers/Lazy"; // Rutas que es un Objeto que tiene todas la rutas en Lazy para mejorar el rendimiento de la WEB
const { Home, Movie, MainPage, Favorite, NotFound, MovieServer } = Rutas; // Desestructuracion de las RUTAS
import LoadingPacman from "./Components/LoadingPacman"; // Componente de Carga
import "./App.css";

export const AppThemeContext = createContext(null); // Contexto de la app
function App() {
  const [querySearch, setQuerySearch] = useState("");
  const arrayLocalStorage =
    JSON.parse(localStorage.getItem("movieFavorite")) === null
      ? []
      : JSON.parse(localStorage.getItem("movieFavorite"));
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("isDark");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "black" : "dark"
    );
  }, [isDark, querySearch]);

  return (
    <AppThemeContext.Provider
      value={{ isDark, setIsDark, querySearch, setQuerySearch }}
    >
      <Suspense fallback={<LoadingPacman />}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/search" element={<Data />} />
            <Route
              path="/favorite"
              element={
                <Favorite arrayLocalStorage={arrayLocalStorage}></Favorite>
              }
            />
            <Route path="/movie/servers/:id" element={<MovieServer />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </AppThemeContext.Provider>
  );
}

export default App;

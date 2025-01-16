import { useState, useEffect, Suspense, lazy, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Data from "./Components/Data"; // Componente de la Ruta Search
import Rutas from "./Routers/Lazy"; // Rutas que es un Objeto que tiene todas la rutas en Lazy para mejorar el rendimiento de la WEB
const { Home, Movie, MainPage, Favorite, NotFound, MovieServer,Series, SeriesSearch, About} = Rutas; // Desestructuracion de las RUTAS
import LoadingPacman from "./Components/LoadingPacman"; // Componente de Carga
import "./App.css";
import SeriesServers from "./Components/SeriesServers";

export const AppThemeContext = createContext(null); // Contexto de la app
function App() {
  const [querySearch, setQuerySearch] = useState("");
  console.log(JSON.parse(localStorage.getItem("movieFavorite")))
  const arrayLocalStorage =
    JSON.parse(localStorage.getItem("movieFavorite")) === null || undefined
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
            <Route path="/series" element={<SeriesSearch></SeriesSearch>}></Route>
            <Route
              path="/favorite"
              element={
                <Favorite arrayLocalStorage={arrayLocalStorage}></Favorite>
              }
            />
            <Route path="/series/servers/:id" element={<SeriesServers></SeriesServers>}></Route>
            <Route path="/movie/servers/:id" element={<MovieServer />}></Route>
            <Route path="/series/:id" element={<Series></Series>}></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </AppThemeContext.Provider>
  );
}

export default App;

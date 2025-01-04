import { useState, useEffect, Suspense, lazy, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { PacmanLoader } from "react-spinners";
import Data from "./Components/Data";


const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <PacmanLoader color="#8A8C91" />
    </div>
  );
};

export const AppThemeContext = createContext(null);

const Home = lazy(() => import("./Pages/Home"));
const Movie = lazy(() => import("./Pages/Movie"));
const MainPage = lazy(() => import("./Components/Main"));

function App() {
  const [querySearch, setQuerySearch] = useState("");
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("isDark");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
    document.documentElement.setAttribute("data-theme", isDark ? "black" : "dark");
  }, [isDark, querySearch]);


  return (
    <AppThemeContext.Provider value={{ isDark, setIsDark, querySearch, setQuerySearch }}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/search" element={<Data></Data>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </AppThemeContext.Provider>
  );
}

export default App;

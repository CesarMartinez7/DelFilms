import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Data from "./Components/Data";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { PacmanLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <PacmanLoader color="white" />
    </div>
  );
};

const Home = lazy(() => import("./Pages/Home"));
const Movie = lazy(() => import("./Pages/Movie"));
const MainPage = lazy(() => import("./Components/Main"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

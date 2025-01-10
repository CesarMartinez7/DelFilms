import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home"));
const Movie = lazy(() => import("../Pages/Movie"));
const MainPage = lazy(() => import("../Components/Main"));
const Favorite = lazy(() => import("../Pages/Favorite"));
const NotFound = lazy(() => import("../Pages/NotFound"));
const MovieServer = lazy(() => import("../Components/MovieServer"))


const Rutas = {
    Home:Home,
    Movie:Movie,
    MainPage:MainPage,
    Favorite:Favorite,
    NotFound:NotFound,
    MovieServer:MovieServer
}


export default Rutas
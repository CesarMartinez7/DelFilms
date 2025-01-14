import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home"));
const Movie = lazy(() => import("../Pages/Movie"));
const MainPage = lazy(() => import("../Components/Main"));
const Favorite = lazy(() => import("../Pages/Favorite"));
const NotFound = lazy(() => import("../Pages/NotFound"));
const MovieServer = lazy(() => import("../Components/MovieServer"))
const Series = lazy(() => import("../Pages/Series"))
const SeriesSearch = lazy(() => import("../Pages/SeriesSearch"))


const Rutas = {
    Home:Home,
    Movie:Movie,
    MainPage:MainPage,
    Favorite:Favorite,
    NotFound:NotFound,
    MovieServer:MovieServer,
    Series:Series,
    SeriesSearch:SeriesSearch
}


export default Rutas
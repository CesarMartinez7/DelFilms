import React, { useState, useEffect, useMemo, useRef, useContext } from "react";
import { Spoiler } from "spoiled";
import Marqueee from "./Marquee";
import { AppThemeContext } from "../App.jsx";
import HoverCard from "./HoverCard.jsx";
import NoImage from "../assets/noImage.webp";
import DataHook from "../Hooks/DataHook.jsx";

function Data() {
  const [handleSubmit, movies] = DataHook();
  return (
    <div className="-z-0">
      <section className="p-3">
        <div className="grid grid-cols-3 -z-0 lg:grid-cols-7 xl:grid-cols-9 gap-2 md:grid-cols-5 xl:gap-4 p-6 mb-6">
          {movies.map((movie) => (
            <HoverCard data={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Data;

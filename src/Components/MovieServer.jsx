import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Spoiler } from "spoiled";
import noImage from "../assets/noImage.webp";

export default function MovieServer() {
  const { id } = useParams();
  return (
    <div className="grid h-screen place-items-center content-center">
    <section className="flex flex-col flex-shrink justify-center items-center min-w-fit p-5 gap-4 shadow-2xl bg-zinc-950 rounded-2xl">
      <h3 className="font-light text-5xl p-6 text-center text-wrap">Servidores disponibles</h3>
      <div className="inline-flex gap-3">
        <Link
          className="flex flex-shrink flex-grow flex-row items-center glass btn btn-neutral gap-2 rounded-md"
          to={`https://vidlink.pro/movie/${id}`}
        >
          <Icon icon="solar:play-line-duotone" width="16" height="16" />
          Vid Link
        </Link>
        <Link
          className="inline-flex items-center glass btn btn-neutral gap-2 rounded-md"
          to={`https://embed.su/embed/movie/${id}`}
        >
          <Icon icon="solar:play-line-duotone" width="16" height="16" />
          Embed Link
        </Link>
      </div>
      <div>
        {/* <Spoiler tagName="div">
          <img src={noImage} alt="" />
        </Spoiler> */}
      </div>
    </section>
    </div>
  );
}

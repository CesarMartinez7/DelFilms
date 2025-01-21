import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Spoiler } from "spoiled";
import noImage from "../assets/noImage.webp";

export default function MovieServer() {
  const { id } = useParams();
  return (
    <div className="grid h-screen place-items-center content-center">
    <section className="flex flex-col flex-shrink justify-center back items-center  min-w-fit  p-10 gap-4 shadow-2xl bg-zinc-950 rounded-2xl">
      <h3 className="font-light text-5xl  text-center text-wrap">Servidores disponibles</h3>
      <p className="font-extralight text-[14px]">Pruebe el servidor que mas le agrade</p>
      <div className="flex flex-col md:flex-row gap-3">
        <Link
          className="flex flex-shrink flex-grow flex-row items-center glass btn btn-neutral gap-2 rounded-md"
          to={`https://vidlink.pro/movie/${id}`}
        >
          <Icon icon="solar:play-line-duotone" width="16" height="16" />
          VidLink Pro
        </Link>
        <Link
          className="inline-flex items-center glass btn btn-neutral gap-2 rounded-md"
          to={`https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=false`}
        >
          <Icon icon="solar:play-line-duotone" width="16" height="16" />
          VidSrCC Link
        </Link>
        <Link
          className="inline-flex items-center glass btn btn-neutral gap-2 rounded-md"
          to={`https://embed.su/embed/movie/${id}`}
        >
          <Icon icon="solar:play-line-duotone" width="16" height="16" />
          Embed Link
        </Link>
        <Link
          className="inline-flex items-center glass btn btn-neutral gap-2 rounded-md"
          to={`https://vidsrc.to/embed/movie/${id}`}
        >
          <Icon icon="solar:play-line-duotone" width="16" height="16" />
          VidSrcTo Link
        </Link>
        <Link
          className="inline-flex items-center glass btn btn-neutral gap-2 rounded-md"
          to={`https://vidsrc.icu/embed/movie/${id}`}
        >
          <Icon icon="solar:play-line-duotone" width="16" height="16" />
          VidSrcICU Link
        </Link>
        
      </div>
      <div>
        {/* <Spoiler tagName="div">
          <img src={noImage} alt="" />
        </Spoiler>  */}
      </div>
    </section>
    </div>
  );
}

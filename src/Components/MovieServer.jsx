import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function MovieServer() {



  const { id } = useParams();
  return (
    <section className="h-screen min-h-fit flex flex-col justify-center items-center ">
        <h3 className="font-light text-5xl">Server</h3>
      <div className="inline-flex gap-3">
        <Link className="inline-flex items-center btn btn-neutral gap-2" to={`https://vidlink.pro/movie/${id    }`}>
          <Icon icon="solar:play-line-duotone" width="16" height="16" />
          Embed Link
        </Link>
        <Link className="inline-flex items-center btn btn-neutral gap-2" to={`https://embed.su/embed/movie/${id}`}>
          <Icon icon="solar:play-line-duotone" width="16" height="16" />
          VidLink Link
        </Link>
        <button className="btn back"></button>
      </div>
    </section>
  );
}

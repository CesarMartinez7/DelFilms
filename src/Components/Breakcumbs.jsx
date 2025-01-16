import React from "react";
import { Icon } from "@iconify/react";
import Alert from "./Alert";

function Breakcumbs({ cast = "Movie",type }) {
  return (
    <div className="breadcrumbs text-sm mx-7 mt-3 sticky top-20 z-30">
      <ul>
        <li>
          <a href="/" className="inline-grid items-center gap-2">
            <Icon icon="iconoir:home" width="18" height="18" />
            Home
          </a>
        </li>
        <li>
          <a className="inline-grid items-center gap-2">
            {type === "TV" ? <Icon icon="solar:tv-outline" width="17" height="17" /> : <Icon icon="solar:clapperboard-open-play-linear" width="17" height="17" />}
            {type}
          </a>
        </li>
        <li>
          <span className="inline-flex items-center gap-2">
          <Icon icon="solar:play-line-duotone" width="14" height="14" />
            {cast}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Breakcumbs;

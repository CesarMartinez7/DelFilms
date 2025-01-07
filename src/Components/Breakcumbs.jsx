import React from "react";
import { Icon } from "@iconify/react";

function Breakcumbs({ movie = "Movie" }) {
  return (
    <div className="breadcrumbs text-sm mx-7 mt-3">
      <ul>
        <li>
          <a href="/" className="inline-grid items-center gap-2">
            <Icon icon="iconoir:home" width="18" height="18" />
            Home
          </a>
        </li>
        <li>
          <a className="inline-grid items-center gap-2">
          <Icon icon="solar:clapperboard-open-play-linear" width="17" height="17" />
            Movie
          </a>
        </li>
        <li>
          <span className="inline-flex items-center gap-2">
          <Icon icon="solar:play-line-duotone" width="16" height="16" />
            {movie}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Breakcumbs;

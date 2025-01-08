import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="footer text-neutral-content p-10">
      <aside>
      <strong className="font-bold text-4xl" >{">.<"}</strong>
        <p>
          DelFilms
          <br />
            Your favorite movies ;).
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
          <Icon icon="tabler:brand-gmail" width="24" height="24" />
          </a>
          <a>
          <Icon icon="tabler:brand-facebook" width="24" height="24" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

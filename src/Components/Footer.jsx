import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="footer text-neutral-content p-10">
      <aside>
        <p>
          delfilms
          <br />
            Your favorite movies and TV ;).
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://mail.google.com/mail/u/2/?pli=1#inbox?compose=CNvvJFXtccWvfGGFXmBJWjszdFvQjFgVDvllNkDbnVDwGPkhJJKwPHGFmdZkpSZlZnWzGbmwMdfrbCgFRXVmwMdKlBRzkWMdMDGDnkzlSjxsjCsggWSJrwvsKhlsNvCQmFxQwVdSCZPDwgbDRVTrxsRTMN">
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

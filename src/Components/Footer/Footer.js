import React from "react";

function Footer() {
  return (
    <div>
      <footer
        class="text-center text-white fixed-bottom"
        style={{ background: "#210818" }}
      >
        <div class="container p-4"></div>

        <div class="text-center p-3" style={{ background: "#000000" }}>
          <b>@2022</b>
          <a class="text-white" href="#">
            {" "}
            DaytodayActivity
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

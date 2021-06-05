import React from "react";

function Footer() {
  var current_year = new Date().getFullYear();

  return (
    <footer>
      <p>
        All rights are reserved to the HAMDAAN AZIZ under copyright act.
        Copyright infringment @ {current_year}
      </p>
    </footer>
  );
}

export default Footer;

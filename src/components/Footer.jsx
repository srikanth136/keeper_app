import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>ChEeKu</p>
    </footer>
  );
}

export default Footer;

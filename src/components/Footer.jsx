import React from "react";

const date = new Date();
const currentYaer = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p> Copyright © Keeper.com {currentYaer}</p>
    </footer>
  );
}

export default Footer;

import React from "react";
import Logo from "./svgs/logo";

function Navbar() {
  return (
    <section className="flex justify-between w-full py-6 items-center mb-16 border-b border-neon-pink">
      <Logo />
      <ul className="flex gap-8">
        <li>
          <h6 className="small">HOME</h6>
        </li>
        <li>
          <h6 className="small">ABOUT</h6>
        </li>
        <li>
          <h6 className="small">SERVICES</h6>
        </li>
        <li>
          <h6 className="small">WORKS</h6>
        </li>
        <li>
          <h6 className="small">CONTACT</h6>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;

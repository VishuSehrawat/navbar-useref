import React from "react";
import { links, social } from "./data";
import logo from "./assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { useState, useRef } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  const linkStyles = {
    height: isClicked
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navContainer">
          <img src={logo} alt="logo" className="logo" />
          <button className="toggle" onClick={toggleClick}>
            <FaBars />
          </button>
        </div>
        <div
          className="linksContainer"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul ref={linksRef} className="links">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="socialLinks">
          {social.map((link) => {
            return <li key={link.id}><a href={link.url}>{link.icon}</a></li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

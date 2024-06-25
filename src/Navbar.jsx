import React from "react";
import { links, social } from "./data";
import logo from "./assets/logo.svg";
import {FaBars} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false)

  const toggleClick = () => {
    setIsClicked(!isClicked)
  }
  console.log(getBoundingClientRect())

  return (
    <nav>
      <div className="navbar">
        <div className="navContainer">
          <img src={logo} alt="logo" className="logo" />
          <button className="toggle" onClick={()=>{setIsClicked(!isClicked)}}>
            <FaBars />
          </button>
        </div>
        <div className={isClicked ?'linksContainer showLinks' : 'linksContainer'}>
          <ul>
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
              return <li key={link.id}>{link.icon}</li>;
            })}
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;

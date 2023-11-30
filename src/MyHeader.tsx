import { HashLink } from "react-router-hash-link";
import logo from "../images/onlyLogo.png";
import "../style/Header.scss";
import menu from "../images/menu.png";
import { useState } from "react";


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen)
  
  return (
    <>
        <NavContent />    
   </>
  );
};

const NavContent = () => {
  return (
    <>
    <div className="header">
      <div className="menu">
        <button>
          <img src={menu} alt="menu" />
        </button>
      </div>

      {/* <a onClick={()=> setIsMenuOpen(!isMenuOpen)}><img src={menu} alt="menu" /></a> */}
      <div className="left">
        <HashLink to={"/#development"}>
          <img src={logo} alt="logo" />
          <h1>FugoHost</h1>
        </HashLink>
        
      </div>

      <div className="middle">
        <HashLink to={"/#development"}>Web Development</HashLink>
        <HashLink to={"/#hosting"}>Web Hosting</HashLink>
        <HashLink to={"/#services"}>Services</HashLink>
        <HashLink to={"/#about"}>About Us</HashLink>
      </div>

      <div className="right">
        <a type="button" href="https://calendly.com/fugohost/30min?month=2023-11" target="_blank" rel="noreferrer">Contact Us</a>
      </div>
    </div>
    </>
  )
}

export default Header;

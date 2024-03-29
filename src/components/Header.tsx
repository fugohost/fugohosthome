import { HashLink } from "react-router-hash-link";
import logo from "../images/onlyLogo.png";
import "../style/Header.scss";
import menu from "../images/menu.png";
import { useState } from "react";


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkHandleClick = () => {
    setIsMenuOpen(false);
  }
  
  return (
    <>
      <div className="header">
      <div className="menu">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={menu} alt="menu" />
        </button>
      </div>

      <div className="left">
        <HashLink to={"/#development"}>
          <img src={logo} alt="logo" />
          <h1>FugoHost</h1>
        </HashLink>
        
      </div>

      <div className={`middle ${isMenuOpen ? 'display-view' : 'hide-view'}`}>
        <ul>
          <li>
            <HashLink to={"/#development"} onClick={linkHandleClick} >Web Development</HashLink>
          </li>
          <li>
            <HashLink to={"/#hosting"} onClick={linkHandleClick} >Web Hosting</HashLink>
          </li>
          <li>
            <HashLink to={"/#services"} onClick={linkHandleClick} >Services</HashLink>
          </li>
          <li>
            <HashLink to={"/#about"} onClick={linkHandleClick} >About Us</HashLink>
          </li>
        </ul>       
      </div>

      <div className="right">
        <a type="button" href="https://calendly.com/fugohost/30min?month=2023-11" target="_blank" rel="noreferrer">Contact Us</a>
      </div>
    </div>  
   </>
  );
};

export default Header;

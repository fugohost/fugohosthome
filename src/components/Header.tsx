import { HashLink } from "react-router-hash-link";
import logo from "../images/onlyLogo.png";
import "../style/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img src={logo} alt="logo" />
        <h1>Fugohost</h1>
      </div>

      <div className="middle">
        <HashLink to={"/#development"}>Web Development</HashLink>
        <HashLink to={"/#hosting"}>Web Hosting</HashLink>
        <HashLink to={"/#services"}>Services</HashLink>
        <HashLink to={"/#about"}>About Us</HashLink>
      </div>

      <div className="right">
        <button>Contact us</button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdViewList } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
const Navbar = () => {
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" style={{ width: "100px", height: "50px" }} />
      <MdViewList
        style={{ width: "30px", height: "30px" }}
        className="list-open"
        onClick={openMenu}
      />
      <ul ref={menuRef} className="nav-menu">
        <RxCross2 className="list-close" onClick={closeMenu} />

        <li className="menuu">
          <AnchorLink className="anchor-link" href="#home">
            {" "}
            <p>Home</p>
          </AnchorLink>
        </li>
        <li className="menuu">
          <AnchorLink className="anchor-link" offset={50} href="#about">
            {" "}
            <p>About me</p>
          </AnchorLink>
        </li>

        <li className="menuu">
          <AnchorLink className="anchor-link" offset={50} href="#contactme">
            {" "}
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contactme">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

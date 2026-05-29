import React from "react";
import Logo from "./Navbar/Logo";
import Navlists from "./Navbar/Navlists";
import Dropdown from "./Navbar/Dropdown";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo></Logo>
      <Navlists></Navlists>
      <Dropdown></Dropdown>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Navbar } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#home" className="ml-2">
        <p className="h4">
          <strong>Quran</strong>
        </p>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComp;

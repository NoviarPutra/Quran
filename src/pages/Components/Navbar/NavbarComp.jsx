import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar>
      <Link to="/">
        <Navbar.Brand className="ml-2">
          <p className="h4">
            <strong>Quran</strong>
          </p>
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default NavbarComp;

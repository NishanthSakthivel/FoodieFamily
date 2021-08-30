import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BrandImg from "../Assets/Brand.png";

const NavBar = () => {
    return (
      <div>
        <Navbar expand="lg justify-content-center">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="m-auto">
                <Nav.Link href="/home" style={{ fontSize: "1.3em" }}>
                  Home
                </Nav.Link>
                <Nav.Link href="/about" style={{ fontSize: "1.3em" }}>
                  About
                </Nav.Link>
                <Nav.Link href="/contact" style={{ fontSize: "1.3em" }}>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home">
              <img
              className="text-alignt-start"
                src={BrandImg}
                alt="brand_img"
                style={{ width: "80px", height: "80px"}}
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavBar;
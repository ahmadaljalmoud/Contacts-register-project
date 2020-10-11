import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return  <>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
          <img
            alt="logo"
            src="https://previews.123rf.com/images/togrulbabayev/togrulbabayev1602/togrulbabayev160200077/54145838-contacts-icon-for-web-and-ui.jpg"
            width="32   "
            height="32"
            className="d-inline-block align-top"
          />{" "}
           Register
        </Navbar.Brand>    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact us</Nav.Link>
      </Nav>
        <Nav.Link inline href="#logout">Logout</Nav.Link>
    </Navbar.Collapse>
  </Navbar>
</>


};

export default NavBar;




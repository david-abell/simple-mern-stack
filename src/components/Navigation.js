import React from "react";

// We import bootstrap to make our application look better.
// import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
// import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image
            width="100px"
            className="d-inline-block align-top"
            src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"
            alt=""
          ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar" />
        <Navbar.Collapse id="basic-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="/create">Create Record</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "gatsby"
import "../../scss/navigation.scss"

const Navigation = props => (
  <>
    <Navbar className="navbar-container" expand="md" sticky="top">
      <Navbar.Brand>Leslie Colon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav as="ul">
          <Nav.Link as="li">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link className="nav-link" to="/interviews">
              Interviews
            </Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link className="nav-link" to="/articles">
              Articles
            </Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link className="nav-link" to="/">
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default Navigation

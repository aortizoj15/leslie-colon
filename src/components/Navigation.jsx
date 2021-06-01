import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'gatsby'
import '../../scss/navigation.scss'

const Navigation = () => (
  <>
    <Navbar className="navbar-container" expand="md" sticky="top">
      <Navbar.Brand>Leslie Colon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav as="ul">
          <Nav.Link as="li">
            <Link className="nav-link" activeClassName="nav-link-active" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link className="nav-link" activeClassName="nav-link-active" to="/about">
              About
            </Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link className="nav-link" activeClassName="nav-link-active" to="/interviews">
              Interviews
            </Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link className="nav-link" activeClassName="nav-link-active" to="/on-air">
              On-Air
            </Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link className="nav-link" activeClassName="nav-link-active" to="/articles">
              Articles
            </Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link className="nav-link" activeClassName="nav-link-active" to="/contact">
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default Navigation

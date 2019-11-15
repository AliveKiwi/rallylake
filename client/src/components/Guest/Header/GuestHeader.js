import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GuestHeader = () => {
  const navbar = { backgroundColor: '#1E90FF', width: '100%' };
  return (
    <Navbar style={navbar} expanded="true" variant="teal">
      <Navbar.Brand href="/">Rally For Lakes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>

          <Link to="/lakes">Lakes</Link>

          <Link to="/events">Events</Link>

          <Link to="/about">About Us</Link>

          <NavDropdown title="Join Us" id="basic-nav-dropdown">
            <NavDropdown.Item to="/volunteer">Volunteer</NavDropdown.Item>
            <NavDropdown.Item to="/corporates">Corporates</NavDropdown.Item>
          </NavDropdown>

          <Link to="/contact">Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default GuestHeader;

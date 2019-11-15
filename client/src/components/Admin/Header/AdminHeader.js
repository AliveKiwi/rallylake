import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminHeader = () => {
  return (
    <Navbar bg="primary" expanded="true" variant="teal">
      <Navbar.Brand to="/">Rally For Lakes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link> </Nav.Link>
          <Nav.Link> </Nav.Link>
          <Nav.Link> </Nav.Link>
          <Nav.Link> </Nav.Link>
          <Nav.Link> </Nav.Link>
          <Nav.Link to="/lakeForm">LakeForm</Nav.Link>
          <Nav.Link to="/eventForm">EventForm</Nav.Link>
          <Nav.Link to="/zoneForm">ZoneForm</Nav.Link>
          <Nav.Link to="/viewLakes">Lakes</Nav.Link>
          <Nav.Link to="/viewEvents">Events</Nav.Link>
          <Nav.Link to="/viewZones">Zones</Nav.Link>
          <Nav.Link to="/viewVolunteers">Volunteers</Nav.Link>
          <Nav.Link to="/viewCorporates">Corporates</Nav.Link>
          <Nav.Link to="/viewContact">ViewContact</Nav.Link>
          <Nav.Link to="/viewComplaints">ViewComplaints</Nav.Link>
          <NavDropdown title="Admin" id="basic-nav-dropdown">
            <NavDropdown.Item to="#">Reset Password</NavDropdown.Item>
            <Nav.Link to="/logot">Logout</Nav.Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminHeader;

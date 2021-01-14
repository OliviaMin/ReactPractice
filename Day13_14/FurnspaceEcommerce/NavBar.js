import React from 'react'
import {NavLink } from 'react-router-dom'
import { Nav, Navbar,NavDropdown} from 'react-bootstrap';

const NavBar=()=>{
    return(
        <header>
        <Navbar className="color-nav"  variant="dark" expand="lg">
  <Navbar.Brand as={NavLink} to="/" activeClassName="is-active" exact={true}>Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to="/Products" activeClassName="is-active">Products</Nav.Link>
      <Nav.Link as={NavLink} to="/Login" activeClassName="is-active">Login</Nav.Link>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/ChangeContext">Register</NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/NotFound">About Us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>



        <br></br>
        </header>
    )
}

export default NavBar
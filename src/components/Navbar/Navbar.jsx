// import React from "react";
// import "./Navbar.css";
// import { ControlledCarousel } from "../TopCorousel/Corousel";
// export const Navbar = () => {
//     return(
//         <>
//         <nav class="navbar navbar-expand-lg navbar-light sticky-top">
//   <div class="container-fluid">
    
//     <a class="navbar-brand" href="#">
//       <img src="data:image/png;base64,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" alt="navbar logo"/>
//       TravelFlip</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">AboutUs</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Blogs</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Products</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">ContactUS</a>
//         </li>
//       </ul>
//       <form class="d-flex">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

           
//         </>
//     )
// }

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";

export const TopNavbar = () => {
  return (
    <Navbar className='navbar fixed fixed-top'>
      <Container fluid>
        <Navbar.Brand className='logo' href="#">
           <img src="data:image/png;base64,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" alt="navbar logo"/>
          Travel Flap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav_buttons me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='navbar_links' href="#home">Home</Nav.Link>
            <Nav.Link className='navbar_links' href="#blogs">Blogs</Nav.Link>
            <Nav.Link className='navbar_links' href="#blogs">Services</Nav.Link>
            <Nav.Link className='navbar_links' href="#blogs">AboutUs</Nav.Link>
            <Nav.Link className='navbar_links' href="#blogs">ContactUS</Nav.Link>
            
            {/* <NavDropdown className='navbar_links' title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default NavScrollExample;
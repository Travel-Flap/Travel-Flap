import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown,Button } from 'react-bootstrap'; 
import "./Nav.css";
// import Fb from "./Images/fb.png";
// import Insta from "./Images/insta.png";
// import Linkedin from "./Images/linkedin.png";
// import Logo from "./Images/logo3.jpeg";

export const TopNavbar =()=>{
    return <>
    
    {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))} */}
      <Navbar className=' bg-transparent' collapseOnSelect expand="lg" variant="light">  
        <Container className='main-div'>  
          <Navbar.Brand href="#home"></Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            {/* <Nav className="me-auto">  

            <Nav.Link href='#'>
                <img src={Logo}  alt="logo" />
                <h2>Travel Flap</h2>
            </Nav.Link>
            
              <Nav.Link href="#features">
                <img src={Fb} alt="fb"/>
              </Nav.Link>  
              
              <Nav.Link href="#features">
                <img src={Insta} alt="Insta"/>
              </Nav.Link>  

              <Nav.Link href="#features">
                <img src={Linkedin} alt="Linkedin"/>
              </Nav.Link>  
            </Nav>   */}
     
            {/* <Nav>
                <img src={Logo}  alt="logo" />
            </Nav> */}

            <Nav className='me-auto'>
              <Nav>
                <img src='data:image/png;base64,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' alt='Nav Logo' />
              </Nav>
            </Nav>

            <Nav className=''>
            <Button variant="light">Home</Button>
            <Button variant="light">AboutUs</Button>
            <Button variant="light">blog</Button>
            <Button variant="light">ContactUs</Button>
            <Button variant="light">Light</Button>
            </Nav>
             <Nav> 
              <Nav.Link href="#memes">  
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                    </span>
                </div>
              </Nav.Link>  
            </Nav> 
             <NavDropdown className='justify-content-center' id="collasible-nav-dropdown">  
                <NavDropdown.Item href="#action/3.1"><h6>Home</h6></NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2"><h6>About</h6></NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3"><h6>Blogs</h6></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><h6>ContactUs</h6></NavDropdown.Item>  
                <NavDropdown.Divider />   
              </NavDropdown> 
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>
}
// export default TopNavbar ;


// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// export const TopNavbar = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0 "
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;
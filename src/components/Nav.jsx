import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown } from 'react-bootstrap'; 
// import Fb from "./Images/fb";
import Insta from "./Images/insta.png";
import Linkedin from "./Images/linkedin.png";
import Logo from "./Images/logo3.png";

const NavbarComp=()=>{
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
      <Navbar collapseOnSelect expand="lg" variant="light">  
        <Container>  
          <Navbar.Brand href="#home"></Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
              <Nav.Link href="#features">
                {/* <img src={Fb} alt="fb"/> */}
              </Nav.Link>  
              
              <Nav.Link href="#features">
                <img src={Insta} alt="Insta"/>
              </Nav.Link>  

              <Nav.Link href="#features">
                <img src={Linkedin} alt="Linkedin"/>
              </Nav.Link>  
            </Nav>  
     
            <Nav>
                <img src={Logo}  alt="logo" />
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
             <NavDropdown id="collasible-nav-dropdown">  
                <NavDropdown.Item href="#action/3.1"><h6>Home</h6></NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2"><h6>About</h6></NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3"><h6>Products</h6></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><h6>Impact</h6></NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>  
              </NavDropdown> 
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>
}
export default NavbarComp;
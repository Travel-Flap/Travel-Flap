// import Navbar from 'react-bootstrap/Navbar';
// import {Container, Nav, NavDropdown,Button } from 'react-bootstrap'; 
// import "./Nav.css";
// import Fb from "./Images/fb.png";
// import Insta from "./Images/insta.png";
// import Linkedin from "./Images/linkedin.png";
// import Logo from "./Images/logo3.jpeg";

// const NavbarComp=()=>{
//     return <>
    
//     {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
//     <Navbar key={expand} bg="light" expand={expand} className="mb-3">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
//         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//         <Navbar.Offcanvas
//           id={`offcanvasNavbar-expand-${expand}`}
//           aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//           placement="end"
//         >
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   ))} */}
//       <Navbar className=' bg-transparent' collapseOnSelect expand="lg" variant="light">  
//         <Container className='main-div'>  
//           <Navbar.Brand href="#home"></Navbar.Brand>  
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
//           <Navbar.Collapse id="responsive-navbar-nav">  
//             {/* <Nav className="me-auto">  

//             <Nav.Link href='#'>
//                 <img src={Logo}  alt="logo" />
//                 <h2>Travel Flap</h2>
//             </Nav.Link>
            
//               <Nav.Link href="#features">
//                 <img src={Fb} alt="fb"/>
//               </Nav.Link>  
              
//               <Nav.Link href="#features">
//                 <img src={Insta} alt="Insta"/>
//               </Nav.Link>  

//               <Nav.Link href="#features">
//                 <img src={Linkedin} alt="Linkedin"/>
//               </Nav.Link>  
//             </Nav>  
     
//             <Nav>
//                 <img src={Logo}  alt="logo" />
//             </Nav> */}

//             <Nav className=''>
//             <Button variant="light">Home</Button>
//             <Button variant="light">AboutUs</Button>
//             <Button variant="light">blog</Button>
//             <Button variant="light">ContactUs</Button>
//             <Button variant="light">Light</Button>
//             </Nav>
//              <Nav> 
//               <Nav.Link href="#memes">  
//                 <div className="input-group rounded">
//                     <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
//                     <span className="input-group-text border-0" id="search-addon">
//                     <i className="fas fa-search"></i>
//                     </span>
//                 </div>
//               </Nav.Link>  
//             </Nav> 
//              <NavDropdown className='justify-content-center' id="collasible-nav-dropdown">  
//                 <NavDropdown.Item href="#action/3.1"><h6>Home</h6></NavDropdown.Item>  
//                 <NavDropdown.Item href="#action/3.2"><h6>About</h6></NavDropdown.Item>  
//                 <NavDropdown.Item href="#action/3.3"><h6>Blogs</h6></NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3"><h6>ContactUs</h6></NavDropdown.Item>  
//                 <NavDropdown.Divider />   
//               </NavDropdown> 
//           </Navbar.Collapse>  
//         </Container>  
//       </Navbar>  
//     </>
// }
// export default NavbarComp;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default BasicExample;
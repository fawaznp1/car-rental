import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function BasicExample() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="custom-navbar sticky-top"
      variant="dark"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand href="#home" className="nav-brand mx-lg-3">Urban Drive</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="order-lg-1"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#home" className="nav-link-custom mx-lg-3" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom mx-lg-3" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link href="#catalog" className="nav-link-custom mx-lg-3" onClick={() => setExpanded(false)}>Catalog</Nav.Link>
            <Nav.Link href="#service" className="nav-link-custom mx-lg-3" onClick={() => setExpanded(false)}>Services</Nav.Link>
              
            <Nav.Link href="#contact" className="nav-link-custom mx-lg-3" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
            
            
          
            {/* <Nav.Link className="nav-link-custom mx-lg-3">
          <select className="form-select form-select-sm bg-dark text-white border-0" style={{ width: '100px' }}>
         <option value="en">EN</option>
         <option value="fr">FR</option>
           <option value="de">DE</option>
            </select>
          </Nav.Link> */}

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar> 
  );
}

export default BasicExample;

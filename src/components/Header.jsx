import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [darkBackground, setDarkBackground] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // For navbar background change on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect if current section has light background
      const sections = ['home', 'about', 'catalog', 'service', 'contact'];
      
      // Find which section is currently most visible in the viewport
      let currentSection = sections.reduce((selected, section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= 150 && rect.bottom >= 150;
          
          if (isVisible) {
            return section;
          }
        }
        return selected;
      }, activeLink);
      
      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }

      // Check background color of current section
      const currentElement = document.getElementById(currentSection);
      if (currentElement) {
        // Get the background color of the current section
        const bgColor = window.getComputedStyle(currentElement).backgroundColor;
        
        // Convert RGB to brightness - simplified calculation
        const isLight = checkIfBackgroundIsLight(bgColor);
        
        // Update navbar theme based on background brightness
        setDarkBackground(!isLight);
      }
    };

    // Helper function to determine if a background is light or dark
    const checkIfBackgroundIsLight = (color) => {
      // Handle different color formats
      let r, g, b;
      
      if (color.startsWith('rgb')) {
        // Handle rgb/rgba format
        const rgb = color.match(/\d+/g);
        if (rgb && rgb.length >= 3) {
          r = parseInt(rgb[0]);
          g = parseInt(rgb[1]);
          b = parseInt(rgb[2]);
        }
      } else if (color.startsWith('#')) {
        // Handle hex format
        const hex = color.substring(1);
        r = parseInt(hex.substr(0, 2), 16);
        g = parseInt(hex.substr(2, 2), 16);
        b = parseInt(hex.substr(4, 2), 16);
      } else {
        // Default to assuming it's dark for safety
        return false;
      }
      
      // Calculate perceived brightness (common formula)
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128; // If > 128, it's considered light
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]);

  const navbarClass = `custom-navbar sticky-top ${scrolled ? 'scrolled' : ''} ${darkBackground ? 'dark-bg' : 'light-bg'}`;

  return (
    <Navbar expand="lg" className={navbarClass} variant={darkBackground ? "dark" : "light"} expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand href="/" className={`nav-brand mx-lg-3 ${darkBackground ? 'text-white' : 'text-dark'}`} onClick={() => {
          setActiveLink('home');
          setExpanded(false);
        }}>Urban Drive</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-lg-1" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link 
              href="/" 
              className={`nav-link-custom mx-lg-3 ${activeLink === 'home' ? 'active' : ''} ${darkBackground ? 'text-white' : 'text-dark'}`}
              onClick={() => {
                setActiveLink('home');
                setExpanded(false);
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className={`nav-link-custom mx-lg-3 ${activeLink === 'about' ? 'active' : ''} ${darkBackground ? 'text-white' : 'text-dark'}`}
              onClick={() => {
                setActiveLink('about');
                setExpanded(false);
              }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#catalog" 
              className={`nav-link-custom mx-lg-3 ${activeLink === 'catalog' ? 'active' : ''} ${darkBackground ? 'text-white' : 'text-dark'}`}
              onClick={() => {
                setActiveLink('catalog');
                setExpanded(false);
              }}
            >
              Catalog
            </Nav.Link>
            <Nav.Link 
              href="#service" 
              className={`nav-link-custom mx-lg-3 ${activeLink === 'service' ? 'active' : ''} ${darkBackground ? 'text-white' : 'text-dark'}`}
              onClick={() => {
                setActiveLink('service');
                setExpanded(false);
              }}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              className={`nav-link-custom mx-lg-3 ${activeLink === 'contact' ? 'active' : ''} ${darkBackground ? 'text-white' : 'text-dark'}`}
              onClick={() => {
                setActiveLink('contact');
                setExpanded(false);
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/Nav.css';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar className="navbar" expand="lg" sticky="top" >
      <Container>
        <Navbar.Brand
          className="nav-link" 
          href="#about" 
          onClick={() => handlePageChange('About')}
        >
          patricktheodore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end text-center" id="basic-navbar-nav">
          <Nav className="mb-2 mb-lg-0 gx-0 nav-links">
            <li>
              <Nav.Link
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                about
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                portfolio
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
              >
                contact
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                resume
              </Nav.Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;

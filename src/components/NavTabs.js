import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { bars } from '@fortawesome/fontawesome-free'
import '../styles/Nav.css';

const burgerNav = <FontAwesomeIcon icon={bars} size="2x" />



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar collapseOnSelect className="navbar" expand="lg" sticky="top" >
      <div className="container-fluid">
        <Navbar.Brand
          className="nav-link" 
          href="#about" 
          onClick={() => handlePageChange('About')}
        >
          patricktheodore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse className="justify-content-end text-center" id="menu">
          <Nav>
              <Nav.Link
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                about
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                portfolio
              </Nav.Link>
              <Nav.Link
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
              >
                contact
              </Nav.Link>
              <Nav.Link
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                resume
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavTabs;


import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          patricktheodore.
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#mywork"
          onClick={() => handlePageChange('MyWork')}

          className={currentPage === 'MyWork' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;


{/* <header class="sticky-top">
  <nav class="navbar navbar-expand-lg sitcky-top navbar-dark bg-dark custom-nav">
    <div className="container-fluid">
      <a
        href="#home"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
      >
        patricktheodore.
      </a>
      <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="fas fa-bars fa-2x" id="burger-nav"></span>
      </button>
      <div class="collapse navbar-collapse custom-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gx-0 nav-links-container">
          <li class="nav-item">
            <a class="nav-link custom-link active" href="#about">about.</a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link" href="./portfolio.html">portfolio.</a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link" href="./portfolio.html">blog.</a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link" href="./contact.html">contact.</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 social-navs-container">
          <li class="nav-item social-navs ">
            <a class="nav-link custom-link fab fa-facebook fa-2x" title="facebook"
              href="https://www.facebook.com/patricktheodore-104912218595856" target="_blank"></a>
          </li>
          <li class="nav-item social-navs">
            <a class="nav-link custom-link fab fa-linkedin-in fa-2x" title="linkedin"
              href="https://www.linkedin.com/in/patrick-sara-8186a3170/" target="_blank"></a>
          </li>
                        </li>
        <li class="nav-item social-navs">
          <a class="nav-link custom-link fab fa-github fa-2x" title="github"
            href="https://github.com/patricktheodore" target="_blank"></a>
        </li>
                    </ul>
    </div>
            </div>
        </nav>
    </header > */}

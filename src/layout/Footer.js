import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const facebook = <FontAwesomeIcon icon={faFacebook} size="2x" />
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />
const github = <FontAwesomeIcon icon={faGithub} size="2x" />

function Footer() {
    return (
        <Nav className="justify-content-center" sticky="bottom">
            <Nav.Item>
                <Nav.Link href="https://www.facebook.com/patricktheodore-104912218595856" target="_blank">{facebook}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://www.linkedin.com/in/patrick-sara-8186a3170/" target="_blank">{linkedin}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://github.com/patricktheodore" target="_blank">{github}</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Footer;
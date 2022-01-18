import React from 'react';
import { Nav, Container, Row, Col, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faDribbble, faInstagram, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';
import pslogo from '../assets/img/pslogo-fat.png';


const facebook = <FontAwesomeIcon icon={faFacebook} size="2x" />
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />
const github = <FontAwesomeIcon icon={faGithub} size="2x" />
const dribble = <FontAwesomeIcon icon={faDribbble} size="2x" />
const envelope = <FontAwesomeIcon icon={faEnvelope} size="2x" />
const instagram = <FontAwesomeIcon icon={faInstagram} size="2x" />
const bootstrap = <FontAwesomeIcon icon={faBootstrap} size="2x" />
const react = <FontAwesomeIcon icon={faReact} size="2x" />
const copyright = <FontAwesomeIcon icon={faCopyright} size="1x" />

function Footer() {
    return (
        <Container fluid id="footer-cont" >
            <Row className="justify-content-center">
                <Col sm={3} className="text-center ">
                    <img src={pslogo} id="pslogo" alt="my logo"></img>
                </Col>
            </Row>
            <Nav className="justify-content-center" sticky="bottom">
                <Nav.Item className="social-fa">
                    <Nav.Link className="social-fa-link" href="https://www.facebook.com/patricktheodore-104912218595856" target="_blank">{facebook}</Nav.Link>
                </Nav.Item>
                <Nav.Item className="social-fa">
                    <Nav.Link href="https://www.linkedin.com/in/patrick-sara-8186a3170/" target="_blank">{linkedin}</Nav.Link>
                </Nav.Item>
                <Nav.Item className="social-fa">
                    <Nav.Link href="https://github.com/patricktheodore" target="_blank">{github}</Nav.Link>
                </Nav.Item>
                <Nav.Item className="social-fa">
                    <Nav.Link href="https://dribbble.com/patricktheodore" target="_blank">{dribble}</Nav.Link>
                </Nav.Item>
                <Nav.Item className="social-fa">
                    <Nav.Link href="https://www.instagram.com/patrick_theodore_/?hl=en" target="_blank">{instagram}</Nav.Link>
                </Nav.Item>
                <Nav.Item className="social-fa">
                    <Nav.Link href="mailto:patricktheodoresara@gmail.com">{envelope}</Nav.Link>
                </Nav.Item>
            </Nav>
            <Row className="footer-btm-row">
                <Col sm={12} className="text-center is-muted footer-col" id="copyright">
                    patricktheodore {copyright} twentytwentytwo
                </Col>
                <Col sm={12} className="text-center is-muted footer-col" id="copyright">
                    email me: patricktheodoresara@gmail.com
                </Col>
                <Col sm={12} className="justify-content-center footer-col">
                    <Stack direction="horizontal" gap={3} className="justify-content-center">
                        <div className="is-muted">powered by</div>
                        <div className="powered-by is-muted">{react}</div>
                        <div className="powered-by is-muted">{bootstrap}</div>
                        
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
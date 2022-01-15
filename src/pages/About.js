import '../styles/About.css'
import React from 'react';
import Avatar from '../assets/img/Avatar.png';
import Greeting from '../containers/About/AboutGreeting';
import Skills from '../containers/About/AboutToolbelt'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

const toolbox = <FontAwesomeIcon icon={faToolbox} size="2x" />




export default function About() {
  return (
      <Container fluid className="about-cont">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="col-10">
                <h2 className="text-center" id="welcome-banner">Designer, Front-end Specialist &#38; Full-stack Developer</h2>
                <h5 className="text-center" id="welcome-banner-subtext">I design and code beautifully simple things with a heavy focus on UI/UX. </h5>
            </Col>
            <Col className="col-12 text-center avatar-img">
                <img src={Avatar} id="avatar" alt="my avatar"></img>
            </Col>
          </Row>
        </Container>
        <Greeting /> 
        <Skills />
      </Container>
  );
}
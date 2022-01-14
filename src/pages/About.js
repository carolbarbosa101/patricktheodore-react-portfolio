import React from 'react';
import Avatar from '../assets/img/Avatar.png';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css'

export default function About() {
  return (
      <Container>
          <Row className="justify-content-md-center">
            <Col className="col-10">
                <h2 className="text-center" id="welcome-banner">Designer, Front-end Specialist &#38; Full-stack Developer</h2>
                <h4 className="text-center" id="welcome-banner-subtext">I design and code beatifully simple things, and I love what I do.</h4>
            </Col>
            <Col className="col-12 text-center avatar-img">
                <img src={Avatar} id="avatar" alt="my avatar"></img>
            </Col>
          </Row>
          <Row>
              <Col>
                <h4>Hi, I'm Patrick. Nice to meet you.</h4>
                <p>
                full stack web developer leveraging hospitality management and an architecture background
                        to build
                        a more aesthetically pleasing and interactive UI experience on the web. I obtained a Certificate
                        in Full Stack
                        Web Development from University of Western Australia in 2022, where I honed my skills in
                        JavaScript
                        , responsive web design and node.js . I am passionate about innovative problem solving
                        and
                        developing fluid, well designed apps, with a focus on responsive design. My main goal for every
                        project is to deliver an end product which maximises user
                        experience. I have recently applied my knowledge to create apps that use a mobile-first
                        approach and implement a fluid layout that gives the user an intuitive experience. I’m very
                        excited to apply my expanding skill set and build on my knowledge as part of a quality-driven
                        team.
                </p>
              </Col>
          </Row>
      </Container>
  );
}
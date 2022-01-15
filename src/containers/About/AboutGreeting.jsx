import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


export default function Greeting() {
    return (
        <Container fluid className="greeting-cont">
            <Row className="justify-content-center">
                <Col sm={12} md={6}>
                    <h3 className="text-center is-white" id="greeting-header">Hi, I'm Patrick. Nice to meet you.</h3>
                    <p className="text-center is-white is-roboto" id="greeting-body">
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
    )
}

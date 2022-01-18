import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


export default function Greeting() {
    return (
        <Container fluid className="greeting-cont">
            <Row className="justify-content-center">
                <Col sm={12} md={6}>
                    <h3 className="text-center is-white" id="greeting-header">Hi, I'm Patrick. Nice to meet you.</h3>
                    <p className="text-center is-white is-roboto" id="greeting-body">
                        Since beginning my journey only 6 months ago, I have obtained a Certificate
                        in Full Stack
                        Web Development from the University of Western Australia, honed my JavaScript skills and 
                        developed a wide range of other applicable skills. I am passionate about innovative problem solving
                        and
                        developing fluid, well designed apps, with a focus on responsive design. I believe less is more, and simplicity is king.
                        My main goal for every
                        project is to deliver an end product which maximises user
                        experience.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

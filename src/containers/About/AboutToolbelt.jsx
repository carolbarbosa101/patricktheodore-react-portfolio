import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faLaptopCode, faServer } from '@fortawesome/free-solid-svg-icons';


const pencil = <FontAwesomeIcon icon={faPencilRuler} size="2x" />
const laptop = <FontAwesomeIcon icon={faLaptopCode} size="2x" />
const cog = <FontAwesomeIcon icon={faServer} size="2x" />



export default function AboutSkills() {
    return (
        <Container fluid className="skills-cont">
            <Row className="justify-content-center skills">
                <Col sm={12} lg={4} className="text-center skills-list">
                    <i className="skills-icon">{laptop}</i>
                    <h4 className="skills-title">Front-end Specialist</h4>
                    <p>I value fast load times, lag free interactions, responsive design, and clean
                        intuitive UI/UX.</p>
                    <h5 className="skills-header">Dev Tools:</h5>
                    <ul className="skills-ul">
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                        <li>Github</li>
                        <li>Gitlab</li>
                        <li>Fontawesome</li>
                        <li>Foundation</li>
                        <li>React</li>
                        <li>Sweet Alert</li>
                    </ul>
                </Col>
                <Col sm={12} lg={4} className="text-center skills-list" id="middle-col">
                    <i className="skills-icon">{pencil}</i>
                    <h4 className="skills-title">Designer</h4>
                    <p>Less is more. I enjoy simple, aesthically pleasing accessible content and intuitive
                        interactions.</p>
                    <h5 className="skills-header">Design Applications:</h5>
                    <ul className="skills-ul">
                        <li>Canva</li>
                        <li>Excalidraw</li>
                        <li>Figma</li>
                        <li>Illustrator</li>
                        <li>Pen &#38; Paper</li>
                        <li>Photoshop</li>
                    </ul>
                </Col>
                <Col sm={12} lg={4} className="text-center skills-list">
                    <i className="skills-icon">{cog}</i>
                    <h4 className="skills-title">Back-end Developer</h4>
                    <p>I enjoy creating well structured back-ends to facilitate my passion for front-end productions.</p>
                    <h5 className="skills-header">Technologies I use:</h5>
                    <ul className="skills-ul">
                        <li>Express</li>
                        <li>Jest</li>
                        <li>Mysql2</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Node.js</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

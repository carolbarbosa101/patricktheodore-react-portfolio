import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import responsiveDesign from '../../assets/logos/responsive-design.ico';
import designTools from '../../assets/logos/design-tools.ico';
import server from '../../assets/logos/server.ico';
import ToolbeltLanguages from '../About/ToolbeltLanguages';


export default function AboutSkills() {
    return (
        <Container fluid className="skills-cont">
            <Row className="justify-content-center skills">
                <Col xs={12} lg={4} className="text-center skills-list">
                    <img alt="responsive design logo" src={responsiveDesign} className="skill-ico"></img>
                    <h4 className="skills-title">Front-end Specialist</h4>
                    <p className="is-roboto">I value fast load times, lag free interactions, responsive design, and clean
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
                <Col xs={12} lg={4} className="text-center skills-list" id="middle-col">
                    <img alt="design tools logo" src={designTools} className="skill-ico"></img>
                    <h4 className="skills-title">Designer</h4>
                    <p className="is-roboto">Less is more. I enjoy simple, aesthically pleasing accessible content and intuitive
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
                <Col xs={12} lg={4} className="text-center skills-list">
                    <img alt="server logo" src={server} className="skill-ico"></img>
                    <h4 className="skills-title">Back-end Developer</h4>
                    <p className="is-roboto">I enjoy creating well structured back-ends to facilitate my passion for front-end productions.</p>
                    <h5 className="skills-header">Technologies:</h5>
                    <ul className="skills-ul">
                        <li>Express</li>
                        <li>Jest</li>
                        <li>Mysql2</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Node.js</li>
                    </ul>
                </Col>
                <ToolbeltLanguages />
            </Row>
        </Container>
    )
}

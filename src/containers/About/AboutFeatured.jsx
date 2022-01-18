import {React, useState } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import CardImgOverlay from '../../components/CardImgOverlay';

function AboutFeatured(props) {

    const [opacity, setOpacity] = useState('');

    const handleMouseEnter = () => {
        setOpacity('hovered')
    };

    const handleMouseLeave = () => {
        setOpacity('');
    }


    return (
        <Container fluid>
            <Row className="justify-content-center">
                <h3 className="text-center featured-title">Featured Projects</h3>
                <h5 className="text-center is-roboto">Here are some projects I've worked on recently.</h5>
            </Row>
            <Row className="featured-projects">
                {props.featured.map((project) => (
                    <Col sm={12} md={6} xl={4}>
                        <Card id={opacity} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="project-card">
                            <Card.Img src={project.image} className="card-image"/>
                            <CardImgOverlay project={project} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

    export default AboutFeatured;

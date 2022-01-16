import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import CardImgOverlay from '../../components/CardImgOverlay';

function AboutFeatured(props) {

    return (
        <Container fluid>
            <Row>
                <h3>Featured Projects</h3>
            </Row>
            <Row>
                {props.featured.map((project) => (
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img src={project.image}/>
                            <CardImgOverlay project={project} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

    export default AboutFeatured;

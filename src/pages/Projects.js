import React, { useState } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import CardImgOverlay from '../components/CardImgOverlay';
import '../styles/Portfolio.css'


function Portfolio(props) {

  const [opacity, setOpacity] = useState('');

  const handleMouseEnter = () => {
    setOpacity('hovered')
  };

  const handleMouseLeave = () => {
    setOpacity('');
  }

  return (
    <Container fluid className="portfolio-cont">
      <Row className="justify-content-center">
        <Col sm={12} md={6}>
          <h1 className="text-center">Welcome To My Portfolio</h1>
          <h5 className="text-center is-roboto portfolio-sub-header">
            Check out some of my latest projects, as well as some small apps developed since I begun my journey in 2021. 
          </h5>
        </Col>
      </Row>
      <Row className="portfolio-projects">
        {props.projects.map((project) => (
          <Col sm={12} lg={4}>
            <Card id={opacity} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="project-card">
              <Card.Img src={project.image} className="card-image" />
              <CardImgOverlay project={project} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Portfolio;


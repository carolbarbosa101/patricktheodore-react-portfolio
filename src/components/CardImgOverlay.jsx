import { React, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import DocsButton from '../components/DocsButton';
import AppButton from "../components/AppButton";

export default function CardImgOverlay(props) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const HoverText = () => {
    return (
      <Container fluid className="hover-text align-middle">
        <Row>
          <Col sm={12} className="text-center is-white">
            <h5>{props.project.title}</h5>
          </Col>
          <Col sm={12} className="text-center">
            <p className="is-roboto is-white">{props.project.shortDesc}</p>
          </Col>
        </Row>
        <Row className="d-grid gap-2 text-center justify-content-center">
          <AppButton app={props.project.app} />
          <DocsButton github={props.project.github} />
        </Row>
      </Container>
    );
  };

  return (
    <Card.ImgOverlay onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="img-overlay">
      {isHovering && <HoverText />}
    </Card.ImgOverlay>
  )
}

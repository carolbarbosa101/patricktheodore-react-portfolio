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
      <Container fluid className="hover-text">
        <Row>
          <Col sm={12} className="text-center is-white">
            <h3>{props.project.title}</h3>
          </Col>
          <Col sm={12} className="text-center">
            <h5 className="is-roboto is-white">{props.project.shortDesc}</h5>
          </Col>
        </Row>
        <Row className="d-grid gap-2">
          <AppButton app={props.project.app} />
          <DocsButton github={props.project.github} />
        </Row>
      </Container>
    );
  };

  return (
    <Card.ImgOverlay onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovering && <HoverText />}
    </Card.ImgOverlay>
  )
}

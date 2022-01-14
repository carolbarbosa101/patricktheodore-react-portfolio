import React, { useState } from 'react';
import { Card, Button, Modal } from "react-bootstrap";

function Portfolio(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {props.projects.map((project) => (
        <div className="col-sm-12 col-md-6 col-lg-3 project-card">
        <Card>
          <Card.Img src={project.image} />
            <Card.ImgOverlay>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.techs}</Card.Text>
              <Button variant="primary" onClick={handleShow}
              >Learn More
              </Button>
            </Card.ImgOverlay>
            <Card.Body>
              <Card.Text>
                {project.shortDesc}
              </Card.Text>
            </Card.Body>
        </Card>

        <Modal size="lg" show={show} onHide={handleClose} aria-labelledby={project.title}>
            <Modal.Header closeButton>
              <Modal.Title id={project.title}>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={project.infoGraphic}></img>
              {project.longDesc}
              <Button variant="primary">
                <a href={project.github} target="_blank">Explore The Docs</a>
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      ))}
    </div>
  )
}

export default Portfolio;


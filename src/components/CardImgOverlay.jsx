import { React, useState } from 'react';
import { Card } from 'react-bootstrap';
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
      <div>
          <h1>{props.project.title}</h1>
          <p>{props.project.shortDesc}</p>
          <div className="d-grid gap-2">
          <AppButton app={props.project.app} />
          <DocsButton github={props.project.github} />
          </div>
      </div>
    );
  };

    return (
        <Card.ImgOverlay onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovering && <HoverText />}
        </Card.ImgOverlay>
    )
}

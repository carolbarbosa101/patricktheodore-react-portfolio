import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const html = <FontAwesomeIcon icon={faHtml5} size="2x" />
const css = <FontAwesomeIcon icon={faCss3} size="2x" />

export default function ToolbeltLanguages() {
    return (
        <Row className="justify-content-center">
            <Col sm={12} >
                <h5 className="text-center">Languages I Speak</h5>
            </Col>
            <Col sm={1}>
                <i>{html}</i>
            </Col>
            <Col sm={1}>
                <i>{css}</i>
            </Col>
        </Row>
    )
}

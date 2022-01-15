import React from 'react';
import { Row, Col } from 'react-bootstrap';
import nodejs from '../../assets/logos/node-js.ico';
import html from '../../assets/logos/html5.ico';
import css from '../../assets/logos/css3.ico';
import js from '../../assets/logos/javascript.ico';
import mysql from '../../assets/logos/mysql.ico';
import express from '../../assets/logos/express.ico';
import mongodb from '../../assets/logos/mongodb.ico';
import react from '../../assets/logos/react.ico';
import npm from '../../assets/logos/npm.ico';
import git from '../../assets/logos/git.ico';
import github from '../../assets/logos/github.ico';
import python from '../../assets/logos/python.ico';


export default function ToolbeltLanguages() {
    return (
        <Row className="justify-content-center text-center languages-cont">
            <Col sm={12} >
                <h5 className="text-center languages-header">Languages I Speak</h5>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="html5 logo" src={html} className="language-ico"></img>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="css3 logo" src={css} className="language-ico"></img>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="js logo" src={js} className="language-ico"></img>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="mysql logo" src={mysql} className="language-ico"></img>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="mongodb logo" src={mongodb} className="language-ico"></img>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="nodejs logo" src={nodejs} className="language-ico"></img>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="express logo" src={express} className="language-ico"></img>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="react logo" src={react} className="language-ico"></img>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="npm logo" src={npm} className="language-ico"></img>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="git logo" src={git} className="language-ico"></img>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="github logo" src={github} className="language-ico"></img>
            </Col>
            <Col sm={4} md={2} lg={1}>
                <img alt="python logo" src={python} className="language-ico"></img>
            </Col>
        </Row>
    )
}

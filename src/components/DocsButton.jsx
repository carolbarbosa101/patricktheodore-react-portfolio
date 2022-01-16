import React from 'react';
import { Button } from "react-bootstrap";
import '../styles/Buttons.css';



export default function DocsButton(props) {
    return (
        <Button variant="secondary" href={props.github} target='_blank' className="z-index">
            View The Docs
        </Button>
    )
}

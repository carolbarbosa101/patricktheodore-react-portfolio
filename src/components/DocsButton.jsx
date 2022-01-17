import React from 'react';
import { Button } from "react-bootstrap";
import '../styles/Buttons.css';



export default function DocsButton(props) {
    return (
        <Button className="secondary" href={props.github} target='_blank'>
            View The Docs
        </Button>
    )
}

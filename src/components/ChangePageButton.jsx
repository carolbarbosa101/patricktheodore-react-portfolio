import React from 'react';
import { Button } from "react-bootstrap";
import '../styles/Buttons.css';



export default function ChangePageButton(props) {
    return (
        <Button className="primary" href={`#${props.page}`}>
            View More &#x3e;
        </Button>
    )
}

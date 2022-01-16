import React from 'react';
import { Button } from "react-bootstrap";



export default function AppButton(props) {
    return (
        <Button variant="primary" href={props.app} target='_blank'>
            Visit App
        </Button>
    )
}

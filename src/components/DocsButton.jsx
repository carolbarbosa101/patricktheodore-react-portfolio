import React from 'react';
import Button from '@mui/material/Button';
import '../styles/Buttons.css';



export default function DocsButton(props) {
    return (
        <Button variant="contained" className="secondary" href={props.github} target='_blank'>
            View The Docs
        </Button>
    )
}

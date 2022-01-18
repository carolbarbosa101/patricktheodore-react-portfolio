import React from 'react';
import Button from '@mui/material/Button';



export default function AppButton(props) {
    return (
        <Button variant="contained" className="primary" href={props.app} target='_blank'>
            Visit App
        </Button>
    )
}

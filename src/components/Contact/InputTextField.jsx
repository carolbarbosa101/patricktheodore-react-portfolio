import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputTextField(props) {
    return (
        <TextField 
        id="outlined-basic" 
        label={props.label} 
        variant="outlined"
        size="small" />
    )
}

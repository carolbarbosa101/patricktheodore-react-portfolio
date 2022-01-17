import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../../styles/Contact.css';

export default function MessageTextArea() {
    return (
        <TextField fullWidth
        id="fullWidth" 
        label='Message'
        variant="outlined"
        size="small" />
    )
}

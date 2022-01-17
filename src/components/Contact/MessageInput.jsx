import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../../styles/Contact.css';

export default function MessageTextArea() {

    const [message, setMessage] = React.useState('');
    const handleChange = (event) => {
    setMessage(event.target.value);
  };

    if (message.length > 400) {
        return (
            <TextField
            error
            fullWidth
            id="outlined-multiline-static" 
            label='Exceed Max Length: 400'
            multiline
            rows={4}
            value={message}
            onChange={handleChange}
            />
        )
    }

    return (
        <TextField
        fullWidth
        id="outlined-multiline-static" 
        label='Message'
        multiline
        rows={4}
        value={message}
        onChange={handleChange}
        />
    )
}

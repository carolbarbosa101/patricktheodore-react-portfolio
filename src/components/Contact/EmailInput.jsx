import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function EmailInput() {

    function validateEmail(email) {
        const re = /^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const [email, setEmail] = React.useState('');
    const handleChange = (event) => {
    setEmail(event.target.value);
    validateEmail(email);
  };


  if (!validateEmail(email)) {
    return (
        <TextField 
        error
        id="outlined-basic" 
        label='Invalid Email' 
        variant="outlined"
        size="small"
        value={email}
        onChange={handleChange} /> 
    )
} 

    return (
        <TextField 
        id="outlined-basic" 
        label='email' 
        variant="outlined"
        size="small"
        value={email}
        onChange={handleChange} />
    )
}

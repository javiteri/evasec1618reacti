import  Button from '@mui/material/Button';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const RegisterPage = () => {

    const history = useNavigate();

    const logout=()=> {
        history('/login');
    } 

return (
        <div>
            <h1>Register Page</h1>
            <Button variant="contained" onClick={logout}>Logout</Button>

        </div>
    );
}

export default RegisterPage;

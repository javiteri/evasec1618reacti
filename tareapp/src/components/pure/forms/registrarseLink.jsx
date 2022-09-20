import React from 'react';
import Link from '@mui/material/Link';
import Typography  from '@mui/material/Typography';

const RegistrarseLink = () => {
    return (
        <Typography variant="body2" color="GrayText" align="center">
            
            <div >
            {'Copyright (c) '}
            {''}
            { new Date().getFullYear()}
            </div>
            <div>
            <Link color="inherit" href='http://localhost:3000/register-page'>
                Registrarse Aqui
            </Link>
            </div>
        </Typography>
    );
}

export default RegistrarseLink;

import  Button from '@mui/material/Button';
import React from 'react';
import Copyright from '../../components/pure/forms/Copyright';
import {useNavigate} from 'react-router-dom';

const DashBoardPage = () => {

    const history = useNavigate();

    const logout=()=> {
        history('/login');
    }

    return (
        <div>
            <h1>
            DashBoardPage
            <Button variant="contained" onClick={logout}>Logout</Button>
            <Copyright></Copyright>
            </h1>    
        </div>
    );
}

export default DashBoardPage;

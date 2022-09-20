import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    
    const history = useNavigate();
    
    const navigate = (path)=>{
        history(path);
    }

    const navigateProps=(path)=>{
        history({
            pathname: path,
            search:'?online=true',//Query Params
            state:{
                online:true
            }
        });
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={ ()=> navigateProps('/online-state')}>Go to Page wit state/Query Params</button>
            <button onClick={ ()=> navigate('/profile') } >Go to profile</button>
            <h2>Dashboard</h2>
        </div>
    );
}

export default HomePage;

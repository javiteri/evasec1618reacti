import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProfilePage = () => {
    
    const location= useLocation();
    alert('We are in my Route:'+ location.pathname);
    const history = useNavigate();

    const goBack = ()=>{
        history(-1)
    }

    const navigateTo=(path)=>{
        history(path);
    }

    return (
        <div>
            <h1>You Profile</h1>
            <button onClick={()=> navigateTo('/tasks') }>Tasks</button>    
            <button onClick={goBack}>Go Back</button>    
        </div>
    );
}

export default ProfilePage;

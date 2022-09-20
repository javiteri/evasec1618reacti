import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoFoundPage = () => {
    const history = useNavigate();
    
    const navigate = (path)=>{
        history(path);
    }
    return (
        <div>
            
            <h1>404 - Page Not Found</h1>
                <button onClick={()=> navigate('/') }>Go to home</button>
        </div>
    );
}

export default NoFoundPage;

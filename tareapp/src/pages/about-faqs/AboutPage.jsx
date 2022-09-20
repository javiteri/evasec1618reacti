import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const history = useNavigate();

    const navigate = (path)=>{
        history(path);
    }
    
    const goBack = ()=>{
        history(-1)
    }

    const goForward = ()=>{
        history(1)
    }


    return (
        <div>
            <h1>
                About FAQs Page
            </h1>
            <div>
                <button onClick={()=> navigate('/') }>Go to home</button>
                <button onClick={goBack}>Go to back</button>
                <button onClick={goForward}>Go to Forward</button>
                
            </div>    
        </div>
    );
}

export default AboutPage;

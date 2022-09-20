import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

    //const {parametros} = useParams();
    const search = useLocation().search;
    const params = new URLSearchParams(search);
    const onl = params.get("online");
    
    return (
        <div>
            <h1> State: {onl ? "The user is Online":"The user is Off"} </h1>        
        </div>
    );
}

export default StatePage;

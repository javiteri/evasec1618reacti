import React from 'react';
import Loginformik from '../../components/pure/forms/loginFormik'
import RegistrarseLink from '../../components/pure/forms/registrarseLink'

const LoginPage = () => {
    return (
        <div>
            <h1>Login Page </h1>
            <Loginformik></Loginformik>
            <RegistrarseLink></RegistrarseLink>
        </div>
    );
}

export default LoginPage;

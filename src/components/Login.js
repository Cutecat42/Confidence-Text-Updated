import LoginButton from './LoginButton';
import React from 'react';

const Login = ({setUserAuth}) => {
    return (
        <div>
            Hi <LoginButton setUserAuth={setUserAuth}/>
        </div>
    )
};

export default Login;

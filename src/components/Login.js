import LoginButton from './LoginButton';
import React from 'react';

const Login = ({setUserAuth}) => {
    return (
        <div>
            <br></br>
            <br></br>
            Please login to see a daily affirmation through the web, or sign up to get a text every day with a positive thought! 
            <LoginButton setUserAuth={setUserAuth}/>
        </div>
    )
};

export default Login;

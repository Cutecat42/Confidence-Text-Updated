import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';


const LoginButton = ({setUserAuth}) => {
    const { user, loginWithRedirect } = useAuth0();

    const handleClick = () => {
        setUserAuth(user);
        loginWithRedirect();
    };

    return (
        <>
        <br></br>
        <br></br>
        <button onClick={handleClick} className='btn btn-secondary'>
            Log In
        </button>
        </>
    )
};

export default LoginButton;

import { UsersCheck } from '../database/ConfidenceTexts';
import { useAuth0 } from '@auth0/auth0-react';
import { Link }from 'react-router-dom';
import React from 'react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    if (UsersCheck()) {

        return (
            isAuthenticated && (
            <div>
                <img src={user.picture} alt="Italian Trulli" className="img-thumbnail rounded mx-auto d-block mt-3 mb-2"></img>
                <p>Hi {user.name}!</p>
                <p>You should be getting a daily text with an affirmation. If not, please email musical_kitty@hotmail.com.</p>
            </div>
            )
        )
    };

    return (
        isAuthenticated && (
        <div>
            <img src={user.picture} alt="Italian Trulli" className="img-thumbnail rounded mx-auto d-block mt-3 mb-2"></img>
            <p>Hi {user.name}!</p>
            <p>You are currently not getting a daily affirmation a day. Click <Link exact to='/signup'>here</Link> if you'd like to change that!</p>
        </div>
        )
    )
};

export default Profile;

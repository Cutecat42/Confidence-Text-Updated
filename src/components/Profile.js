import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log(user);

    return (
        isAuthenticated && (
        <div>
            <p>Hi {user.name}!</p>
        </div>
        )
    )
}

export default Profile;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './NavBar.css';

const NavBar = () => {

const [user, setUser] = useState(true);

    if (!user) return (
        <>
        <nav className='MyNavBarClass'>
            <NavLink exact to='/' className='navBarLink'>
                Home 
            </NavLink>
            <NavLink exact to='/login' className='navBarLink'>
                Login 
            </NavLink> 
        </nav>
        <button onClick={() => setUser(true)}>Login</button>
        </>
    )

    return (
        <>
        <nav className='MyNavBarClass'>
            <NavLink exact to='/' className='navBarLink'>
                Home 
            </NavLink>
            <NavLink exact to='/logout' className='navBarLink'>
                Logout
            </NavLink>
        </nav>
        <button onClick={() => setUser(false)}>Logout</button>
        </>

    )
}

export default NavBar;

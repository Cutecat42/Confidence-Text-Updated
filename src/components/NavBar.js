import { NavLink } from 'react-router-dom';
import React from 'react';
import './NavBar.css';

const NavBar = ({user}) => {
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
        </>
    );

    return (
        <>
        <nav className='MyNavBarClass'>
            <NavLink exact to='/' className='navBarLink'>
                Home 
            </NavLink>
            <NavLink exact to='/daily' className='navBarLink'>
                Daily Inspirational Quote
            </NavLink>
            <NavLink exact to='/profile' className='navBarLink'>
                Profile
            </NavLink>
            <NavLink exact to='/logout' className='navBarLink'>
                Logout
            </NavLink>
        </nav>
        </>

    )
}

export default NavBar;

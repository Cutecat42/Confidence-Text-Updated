import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink }from 'react-router-dom';
import  Nav from 'react-bootstrap/Nav';
import React from 'react';

const NavBar = ({user}) => {
    if (!user) return (
        <Navbar bg='dark' variant='dark' className='py-1'>
            <NavLink exact to='/' className='navbar-brand'>Confidence Text</NavLink>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                <Nav>
                    <NavLink exact to='/login' className='text-decoration-none text-light'>Login</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

    return (
        <Navbar bg='dark' variant='dark' className='py-1'>
            <NavLink exact to='/daily' className='navbar-brand'>Confidence Text</NavLink>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav>
                <NavLink exact to='/daily' className='text-decoration-none text-light mr-3'>Daily Inspirational Quote</NavLink>
            </Nav>
            <Nav>
                <NavLink exact to='/profile' className='text-decoration-none text-light mr-3'>Profile</NavLink>
            </Nav>
            <Nav>
                <NavLink exact to='/logout' className='text-decoration-none text-light mr-3'>Logout</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
};

export default NavBar;

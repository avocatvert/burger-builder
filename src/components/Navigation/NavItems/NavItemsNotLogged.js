import React from 'react';
import NavItem from './NavItem/NavItem';

const NavItemsNotLogged = () => (
    <React.Fragment>
        <NavItem exact link='/login'> Sign in </NavItem>
        <NavItem exact link = '/signup'> Sign up </NavItem>
    </React.Fragment>
)

export default NavItemsNotLogged;
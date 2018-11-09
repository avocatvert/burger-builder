import React from 'react';
import NavItem from './NavItem/NavItem';



const NavItemsLogged = () => (
    <React.Fragment>
        <NavItem link='/burger-builder'> Burger Builder</NavItem>
        <NavItem link="/orders" > Orders </NavItem>
    </React.Fragment>
)


export default NavItemsLogged;
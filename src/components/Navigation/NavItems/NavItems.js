import React from 'react';
import NavItem  from './NavItem/NavItem';
import classes from "./NavItems.css";

function navItems() {
    // let isActive=false
    // const becomeActive = () => {isActive=true}
    // console.log('isActive ', isActive);
    

    return (
        <ul className={classes.NavItems}>
            <NavItem link='/burger-builder'> Burger Builder</NavItem>

            <NavItem link="/orders" > Orders </NavItem>

        </ul>
    );

}

export default navItems;

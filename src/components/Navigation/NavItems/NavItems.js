import React from 'react';
import NavItemsLogged from './NavItemsLogged';
import NavItemsNotLogged from './NavItemsNotLogged';
import classes from "./NavItems.module.css";

import {connect} from 'react-redux';

function navItems({userLogged}) {
 
    return (
        <ul className={classes.NavItems}>
            {userLogged ? <NavItemsLogged/> : <NavItemsNotLogged/>}
        </ul>
    );

}

const mapStateToProps = (state) => (
        {userLogged : state.authRDUX.login_success}
    )

export default connect(mapStateToProps)(navItems);

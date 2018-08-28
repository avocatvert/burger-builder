import React from 'react';
import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavItems from '../NavItems/NavItems';


//import PropTypes from 'prop-types';

const Toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavItems/>
            </nav>
        </header>
    );
};

// Toolbar.propTypes = {
    
// };

export default Toolbar;
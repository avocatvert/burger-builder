import React from 'react';
import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavItems from '../NavItems/NavItems';
import DrawToggle from '../SideDraw/DrawToggle/DrawToggle';


//import PropTypes from 'prop-types';

const Toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <DrawToggle toggleSideDraw={props.toggleSideDraw}/>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className = {classes.DesktopOnly}>
                <NavItems/>
            </nav>
        </header>
    );
};

// Toolbar.propTypes = {
    
// };

export default Toolbar;
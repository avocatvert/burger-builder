import React from 'react';
import classes from './SideDrawToggle.module.css';


const DrawToggle = (props) => {
    return (
        <div 
            className={classes.DrawToggle} 
            onClick = {props.toggleSideDraw}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default DrawToggle;
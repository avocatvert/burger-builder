import React from 'react';
import classes from './DrawToggle.css';


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
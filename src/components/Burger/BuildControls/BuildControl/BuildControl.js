import React from 'react';
import classes from './BuildControl.css';

// LOGIC FOR A BuildControl

const buildControl = (props) => (

    <div className={classes.BuildControl}> 
        <div className ={classes.Label}>{props.label}</div>
        <button>Less</button>
        <button>More</button>

    </div>
)


export default buildControl;
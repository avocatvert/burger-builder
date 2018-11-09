import React from 'react';
import classes from './BuildControl.module.css';

// LOGIC FOR A BuildControl

const buildControl = (props) => (

    <div className={classes.BuildControl}> 
        <div className ={classes.Label}>{props.label}</div>
        <button 
            onClick={props.decrement} 
            className={classes.Less} 
            disabled={props.isDisabled}
            >Less</button>

        <button 
            onClick={props.increment} 
            className={classes.More} 
            >More</button>

    </div>
)


export default buildControl;
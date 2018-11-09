import React from 'react';
import classes from './Button.module.css';


const button = (props) => {
    let buttonStyle=classes.Button +" "+classes[props.btnType];
    if (props.disabled) buttonStyle = classes.Button
    return (
        <button 
            className={buttonStyle}
            disabled={props.disabled}
            onClick={props.clicked}>
            {props.children} 
        </button>
    );
};

export default button;
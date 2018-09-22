import React from 'react';
import classes from './Input.css';


const Input = (props) => {

    let inputElement = null;
    let elementStyle = classes.InputElement
    if (props.touched && !props.isValid ) elementStyle =  classes.InputElement + " "+ classes.Invalid

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                            className={elementStyle}   
                            {...props.elementConfig} 
                            value={props.value}
                            onChange={props.changed}
                            />
            break;

        case ('textarea'):
            inputElement= <textarea 
                            className={elementStyle} 
                            {...props.elementConfig} 
                            value={props.value}
                            onChange={props.changed}
                            /> 
            break;
        
        case 'select':
            inputElement = (

            <select className={classes.InputElement} value={props.value} onChange={props.changed} >

                {props.elementConfig.options.map( config =>
                    <option key={config.value} value={config.value}>
                        {config.children}
                    </option>)} 

            </select>)

            break;

        default:
            inputElement = <input 
                            className={elementStyle}   
                            {...props.elementConfig} value={props.value}
                            onChange={props.changed}
                             />
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>

            {inputElement}

        </div>
    );
};

export default Input;
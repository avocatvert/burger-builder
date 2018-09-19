import React from 'react';
import classes from './Input.css';


const Input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case 'input':
            inputElement = <input 
                            className={classes.InputElement}   
                            {...props.elementConfig} value={props.value}
                            onChange={props.changed}
                            />
            break;

        case 'textarea':
            inputElement= <textarea 
                            className={classes.InputElement} 
                            {...props.elementConfig} value={props.value}
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
                            className={classes.InputElement}   
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
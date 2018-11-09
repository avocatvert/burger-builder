import React from 'react';
import classes from './Field.module.css';

// const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)

const Field = (props) => {

    let field = null;
    let fieldStyle = classes.FieldElement
    if (props.touched && !props.isValid ) fieldStyle =  classes.FieldElement + " "+ classes.Invalid

    switch (props.field) {
        case ('input'):
            field = <input 
                    className={fieldStyle}   
                    {...props.configs} 
                    value={props.value}
                    onChange={props.changed}
                    />
            break;

        case ('textarea'):
            field= <textarea 
                    className={fieldStyle} 
                    {...props.configs} 
                    value={props.value}
                    onChange={props.changed}
                    /> 
            break;
        
        case 'select':
            field = (
                <select 
                className={classes.FieldElement} 
                value={props.value} 
                onChange={props.changed} 
                name={props.name}
                >
                    {props.configs.options.map( config =>
                        <option key={config.value} value={config.value}>
                            {config.labeled}
                        </option>)} 
                </select>)

            break;

        default:
            field = <input 
                        className={fieldStyle}   
                        {...props.configs} 
                        value={props.value}
                        onChange={props.changed}
                            />
            break;
    }
    return (
        <div className={classes.Field}>
            <label className={classes.Label} htmlFor={props.configs.name}>
                {props.configs.name}
            </label>

            {field}

        </div>
    );
};

export default Field;
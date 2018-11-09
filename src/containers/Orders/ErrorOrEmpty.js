import React from 'react';
import classes  from './Orders.module.css';

const ErrorOrEmpty = (props) => {
    return (
        <h4 className ={classes.ErrorOrEmpty}>
            {props.message}
        </h4>
    );
};

export default ErrorOrEmpty;
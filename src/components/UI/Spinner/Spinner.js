import React from 'react';
import classes from './Spinner.module.css';



function spinner(props) {
    return (
        <React.Fragment>   
            <div className={classes.Loader}>
            </div>
            <h4 style={{textAlign:"center"}}>{props.message}</h4>
        </React.Fragment>
            
        
    );

};



export default spinner
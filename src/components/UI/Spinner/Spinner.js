import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import classes from './Spinner.css';



function spinner(props) {
    return (
        <Aux>   
            <div className={classes.Loader}>
            </div>
            <h4 style={{textAlign:"center"}}>{props.message}</h4>
        </Aux>
            
        
    );

};



export default spinner
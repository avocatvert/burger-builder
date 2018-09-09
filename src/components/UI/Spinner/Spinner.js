import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import classes from './Spinner.css';



function spinner(props) {
    return (
        <Aux>   
            <div className={classes.Loader}>
            </div>
            <p style={{textAlign:"center"}}>{props.message}</p>
        </Aux>
            
        
    );

};



export default spinner
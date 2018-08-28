import  React from 'react';
import classes from  './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const modal = (props) => (
   <Aux>
        <Backdrop 
            show={props.show} 
            close={props.closeModal}/>
        <div 
            className = {classes.Modal} 
            style={{
                display: props.show? null : 'none' 
            }} >
            <span 
                className={classes.Closer}
                onClick={props.closeModal}
                >&times;</span>
            {props.children}
        </div>
    </Aux>
)

export default modal;
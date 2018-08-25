import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

//WILL COMBINED ALL BuildControl component

const controls = [
    {label:'Bacon', type: 'bacon'},
    {label:'Meat', type: 'meat'},
    {label:'Salad', type: 'salad'},
    {label:'Cheese', type: 'cheese'}
];

const getBuildControls = (controlList,props) => {
    return controlList.map(e =>  <BuildControl 
                                    key={e.label} 
                                    label={e.label} 
                                    increment={() => props.increment(e.type)} 
                                    decrement={() => props.decrement(e.type)}
                                    isDisabled ={props.isDisabled(e.type)}
                                     />)
}


const buildControls = (props) => (
    <div className = {classes.BuildControls}>
        <p><strong>Total price: ${props.totalPrice.toFixed(2)}</strong></p>

        {getBuildControls(controls, props)}

        <button disabled={!props.canCompleteOrder} className={classes.OrderButton}>
            COMPLETE YOUR ORDER
        </button>
    </div>
)

export default buildControls;
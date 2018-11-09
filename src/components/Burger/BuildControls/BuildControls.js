import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

//WILL COMBINED ALL BuildControl component

const controls = [
    {label:'Bacon', type: 'bacon'},
    {label:'Meat', type: 'meat'},
    {label:'Salad', type: 'salad'},
    {label:'Cheese', type: 'cheese'}
];

const gatherBuildControls = (controlList,props) => {
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
        <p><strong>Total price: ${props.totalPrice}</strong></p>

        {gatherBuildControls(controls, props)}

        <button 
            onClick ={props.startPurchase}
            disabled={!props.canCompleteOrder} 
            className={classes.OrderButton}>
                Complete Order!
        </button>
    </div>
)

export default buildControls;

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

const getBuildControls = (controlList) => controlList.map(e =>  <BuildControl key={e.label} label={e.label} />)






const buildControls = () => (
    <div className = {classes.BuildControls}>
        {getBuildControls(controls)}
    </div>
)

export default buildControls;
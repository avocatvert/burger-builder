import React from 'react';


 const Summary = ({ingredients}) => (Object.keys(ingredients).map(
        (x) => <li key={x}> 
                    <span style = {{textTransform:'capitalize'}}>{x}</span>: {ingredients[x]} 
                </li> 
    )) 


export default Summary;

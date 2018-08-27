import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDraw from '../Navigation/SideDraw/SideDraw';

const layout = (props) => {

return(
    <Aux>
        <div> 
            <Toolbar/>
            <SideDraw/>
        </div>
        <main className ={classes.Content}>
            {props.children}
        </main>
    </Aux>
    )
}
export default layout;
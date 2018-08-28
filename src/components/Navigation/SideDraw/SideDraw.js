import React from 'react';
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import classes from "./SideDraw.css";
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';



const SideDraw = (props) => {

    // adjust classes if props.open
    const cls = classes.SideDraw + " "+ (props.open ? classes.Open : classes.Close);
 
    

    return (
        <Aux>
            <Backdrop close ={props.closeSideDraw} show={props.open}/>
            <div className={cls}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default SideDraw;
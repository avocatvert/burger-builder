import React from 'react';
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import classes from "./SideDraw.module.css";
import Backdrop from '../../UI/Backdrop/Backdrop';



const SideDraw = (props) => {

    // adjust classes if props.open
    const cls = classes.SideDraw + " "+ (props.open ? classes.Open : classes.Close);
 
    

    return (
        <React.Fragment>
            <Backdrop close ={props.closeSideDraw} show={props.open}/>
            <div className={cls}>
                <div className={classes.Logo} onClick={props.toggleSideDraw}>
                    <Logo/>
                </div>
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default SideDraw;
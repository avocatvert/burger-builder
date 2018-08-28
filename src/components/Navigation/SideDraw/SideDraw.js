import React from 'react';
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import classes from "./SideDraw.css";

const SideDraw = () => {
    return (
        <div className={classes.SideDraw}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavItems/>
            </nav>
        </div>
    );
};

export default SideDraw;
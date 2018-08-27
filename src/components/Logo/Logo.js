import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from "./Logo.css";
//import PropTypes from 'prop-types';

const logo = props => {
    return (
        <div className={classes.Logo}>
           <img src={burgerLogo} alt='burger logo'/> 
        </div>
    );
};
//  logo.propTypes = {
    
// };

export default logo;
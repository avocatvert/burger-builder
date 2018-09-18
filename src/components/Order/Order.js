import React from 'react';
import classes from './Order.css';

const Order = (props) => {

    const items = Object.entries(props.ingredients)
                        .map(e =>   <p key={e} className={classes.Item}>
                                        {e[0]} ({e[1]})
                                    </p>)

    return (
        <div className={classes.Order}>
           {items}
            <p>Price: ${props.price}</p>
        </div>
    );
};

export default Order;
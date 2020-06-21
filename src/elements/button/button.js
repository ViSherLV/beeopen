import React from 'react';
import classes from './button.module.css'

const Button = props => (
    <React.Fragment>
        <button className={classes.Button}>{props.children}</button>
    </React.Fragment>
)

export default Button
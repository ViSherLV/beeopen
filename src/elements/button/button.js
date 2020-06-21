import React from 'react';
import classes from './button.module.css'

function Button(props) {
    return (
        <React.Fragment>
            <button className={classes.Button} onClick={props.func}>{props.children}</button>
        </React.Fragment >
    )
}

export default Button
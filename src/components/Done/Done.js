import React from 'react';
import classes from './Done.module.css';

const DoneTask = props => (
    <div className={classes.DoneTask}>
        <div className={classes.DoneHeader}>
            <p>Список задач</p>
        </div>
    </div>
)

export default DoneTask
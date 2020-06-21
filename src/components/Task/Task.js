import React from 'react';
import classes from './Task.module.css'
import Button from './../../elements/button/button'

const Task = props => (
    <div className={classes.Task}>
        <div className={classes.TaskLeft}>
            <h3>{props.task}</h3>
            {props.review}
        </div>
        <div className={classes.TaskRight}>
            <Button>Редагувати</Button>
            <Button>Виконано</Button>
        </div>
    </div>
)

export default Task
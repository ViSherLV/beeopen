import React from 'react';
import classes from './Done.module.css';
import Button from '../../elements/button/button'
import Task from '../Task/Task';
import { connect } from 'react-redux'

const DoneTask = props => (
    <div className={classes.DoneTask}>
        <div className={classes.DoneHeader}>
            <h2>Список готових задач</h2>
        </div>
        {
            props.tasks.map((task, index) => {
                if (task.status == true) {
                    return (
                        <Task task={task.task} review={task.review} key={index} id={index} func={task.func} />
                    )
                }
            })
        }
    </div>
)
function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps)(DoneTask)
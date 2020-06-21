import React from 'react';
import classes from './PlanningTask.module.css';
import Task from '../Task/Task';
import Button from '../../elements/button/button'
import { connect } from 'react-redux'

function PlanningTask(props) {
    console.log(`props1${JSON.stringify(props)}`)
    return (
        <div className={classes.PlanningTask}>
            <div className={classes.PlanningHeader}>
                <h2>Список задач</h2>
                <Button>Додати завдання</Button>
            </div>
            {
                props.tasks.map((task, index) => {
                    return (
                        <Task task={task.task} review={task.review} key={index} />
                    )
                })
            }
        </div>
    )

}
function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(PlanningTask)
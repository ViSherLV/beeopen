import React from 'react';
import classes from './PlanningTask.module.css';
import Task from '../Task/Task';
import Button from '../../elements/button/button'
import { connect } from 'react-redux'

function PlanningTask(props) {
    return (
        <div className={classes.PlanningTask}>
            <div className={classes.PlanningHeader}>
                <h2>Список задач</h2>
                <Button func={() => props.OPENMODAL()}>Додати завдання</Button>
            </div>
            {
                props.tasks.map((task, index) => {
                    if (task.status === false) {
                        return (
                            <Task task={task.task} review={task.review} key={index} id={index} func={task.func} />
                        )
                    }
                    return null;
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
function mapDispatchToProps(dispatch) {
    return {
        OPENMODAL: () => dispatch({ type: 'OPENCREATEMODAL' })

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(PlanningTask)
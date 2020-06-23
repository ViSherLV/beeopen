import React from 'react';
import classes from './PlanningTask.module.css';
import Task from '../Task/Task';
import Button from '../../elements/button/button'
import { connect } from 'react-redux'

function PlanningTask(props) {
    console.log(props)
    function test(a) {
        console.log("ss")
    }
    return (
        <div className={classes.PlanningTask}>
            <div className={classes.PlanningHeader}>
                <h2>Список задач</h2>
                <Button func={() => props.openModal()}>Додати завдання</Button>
            </div>
            {
                props.tasks.map((task, index) => {
                    if (task.status == false) {
                        return (
                            <Task task={task.task} review={task.review} key={index} id={index} func={task.func} />
                        )
                    }
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
        onAdd: () => dispatch({ type: 'ADD' }),
        onSub: () => dispatch({ type: 'SUB' }),
        createTask: (a) => dispatch({ type: 'CREATE_TASK', status: "done", id: a }),
        openModal: (a) => dispatch({ type: 'OPENCREATEPOPUP', task: a }),

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(PlanningTask)
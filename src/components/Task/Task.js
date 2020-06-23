import React from 'react';
import classes from './Task.module.css'
import Button from './../../elements/button/button'
import { connect } from 'react-redux'
import { doneTask, openChangeModal } from '../../redux/actions/actions'

function Task(props) {
    return (
        <div className={classes.Task}>
            <div className={classes.TaskLeft}>
                <h3>{props.task}</h3>
                <p>{props.review}</p>
            </div>
            <div className={classes.TaskRight}>
                {!props.tasks[props.id].status ? <Button func={() => props.opendModal(props.id)} >Редагувати</Button> : null}
                {!props.tasks[props.id].status ? <Button id={props.index} number={props.id} func={() => props.onDone(props.id)}>Виконано</Button> : null}
            </div>
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
        onDone: (id) => dispatch(doneTask(id)),
        opendModal: (task) => dispatch(openChangeModal(task)),

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
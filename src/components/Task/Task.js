import React from 'react';
import classes from './Task.module.css'
import Button from './../../elements/button/button'
import { connect } from 'react-redux'

function Task(props) {
    console.log(props)
    function test() {
        console.log(props.id)
    }
    return (
        <div className={classes.Task}>
            <div className={classes.TaskLeft}>
                <h3>{props.task}</h3>
                {props.review}
            </div>
            <div className={classes.TaskRight}>
                <Button>Редагувати</Button>
                <Button id={props.index} number={props.id} func={() => props.onDone(props.id)}>Виконано</Button>
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
        onDone: (a) => dispatch({ type: 'DONE', status: "done", id: a }),

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
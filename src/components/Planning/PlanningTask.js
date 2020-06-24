import React, { useState, useEffect } from 'react';
import classes from './PlanningTask.module.css';
import Task from '../Task/Task';
import Button from '../../elements/button/button'
import { connect } from 'react-redux'
import { openCreateModal } from '../../redux/actions/actions';

class PlanningTask extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.ONLOAD()
    }
    render() {
        if (this.props.state.isLoading) {
            return (<div className={classes.PlanningTask}>
                <div className={classes.PlanningHeader}>
                    <h2>Завантажуємо лист задач</h2>
                </div>
                <div className={classes.loader}>
                    <img src="https://thumbs.gfycat.com/HugeDeliciousArchaeocete-small.gif"></img>
                </div>
            </div>)
        }
        return (
            <div className={classes.PlanningTask}>
                <div className={classes.PlanningHeader}>
                    <h2>Список задач</h2>
                    <Button func={() => this.props.OPENMODAL()}>Додати завдання</Button>
                </div>
                {
                    this.props.state.tasks.map((task, index) => {
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



}

function mapStateToProps(state) {
    return {
        state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        OPENMODAL: () => dispatch(openCreateModal()),
        ONLOAD: () => dispatch({ type: "SHOW_LOADER" })

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(PlanningTask)
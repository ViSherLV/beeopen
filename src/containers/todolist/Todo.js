import React, { Component } from 'react';
import { connect } from 'react-redux'
import classes from "./Todo.module.css"
import PlanningTask from '../../components/Planing/PlanningTask'
import Done from '../../components/Done/Done';
import Popup from '../../components/popup/popup';
import Createtask from '../../components/CreateTask/Createtask'
class Todo extends Component {
    render() {

        return (
            <div className={classes.Todo}>
                <div className={classes.TodoWrapper}>
                    {this.props.state.popupContent.isOpenEdit ? <Popup /> : null}
                    {this.props.state.popupContent.isOpenCreate ? <Createtask /> : null}

                    <PlanningTask />
                    <Done />
                </div>

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
        onAdd: () => dispatch({ type: 'ADD' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
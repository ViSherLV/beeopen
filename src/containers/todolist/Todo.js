import React, { Component } from 'react';
import { connect } from 'react-redux'
import classes from "./Todo.module.css"
import PlanningTask from '../../components/Planing/PlanningTask'
import Done from '../../components/Done/Done';
import Modal from '../../components/Modal/Modal';
import Createtask from '../../components/CreateTask/Createtask'
class Todo extends Component {
    render() {

        return (
            <div className={classes.Todo}>
                <div className={classes.TodoWrapper}>
                    {this.props.state.ModalContent.isOpenEdit ? <Modal /> : null}
                    {this.props.state.ModalContent.isOpenCreate ? <Createtask /> : null}
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


export default connect(mapStateToProps)(Todo)
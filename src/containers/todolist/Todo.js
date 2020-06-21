import React, { Component } from 'react';
import { connect } from 'react-redux'
import classes from "./Todo.module.css"
import PlanningTask from '../../components/Planing/PlanningTask'
import Done from '../../components/Done/Done';
class Todo extends Component {
    render() {
        console.log(`props ${JSON.stringify(this.props)}`)
        return (
            <div className={classes.Todo}>
                <div className={classes.TodoWrapper}>
                    <PlanningTask />
                    <Done />
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({ type: 'ADD' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
import React, { Component } from 'react';
import { connect } from 'react-redux'
import classes from "./Todo.module.css"
import PlanningTask from '../../components/Planing/PlanningTask'
import Done from '../../components/Done/Done';
class Todo extends Component {
    state = {
        tasks: [
            {
                task: "16:00 BeeOpen status call",
                review: "В процесі status call команда BeeOpen обговорює усі аспекти роботи над проектом з Майком",
                status: false
            }, {
                task: "11:00 BeeOpen Grooming call",
                review: "В процесі Grooming call команда BeeOpen обговорює усі аспекти роботи над проектом між собою",
                status: false
            }]
    }
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

export default connect(mapStateToProps)(Todo)
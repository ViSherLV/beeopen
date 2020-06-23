import React from 'react';
import classes from './Createtask.module.css';
import Task from '../Task/Task';
import Button from '../../elements/button/button'
import { connect } from 'react-redux';

function Createtask(props) {
    console.log(`popupState ${JSON.stringify(props)}`)
    return (
        <div className={classes.Popup}>
            <div className={classes.top}>
                <p>Назва таску</p>
                <textarea value={props.tasks.task} onChange={(a) => props.onChageTask(a.target.value)}></textarea>
            </div>
            <div>
                <p>Опис таску</p>
                <textarea value={props.tasks.review} onChange={(a) => props.onChageReview(a.target.value)}></textarea>
            </div>
            <Button className={classes.Button} func={(a) => props.onCreate(props.tasks.taskid)}>Додати таск</Button>
        </div>
    )

}
function mapStateToProps(state) {
    return {
        tasks: state.popupContent,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({ type: 'ADD' }),
        onSub: () => dispatch({ type: 'SUB' }),
        onDone: (a) => dispatch({ type: 'DONE', status: "done", id: a }),
        onChageTask: (a) => dispatch({ type: 'ONCHANGETASK', target: a }),
        onChageReview: (a) => dispatch({ type: 'ONCHANGEREVIEW', target: a }),
        onSave: (a) => dispatch({ type: 'ONSAVE', id: a }),
        onCreate: (a) => dispatch({ type: 'CREATE' })

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Createtask)
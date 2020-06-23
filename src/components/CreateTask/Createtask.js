import React from 'react';
import classes from './Createtask.module.css';
import Button from '../../elements/button/button'
import { connect } from 'react-redux';

function Createtask(props) {
    return (
        <div className={classes.Modal}>
            <div className={classes.top}>
                <p>Назва таску</p>
                <textarea value={props.tasks.task} onChange={(variable) => props.onChageTask(variable.target.value)}></textarea>
            </div>
            <div>
                <p>Опис таску</p>
                <textarea value={props.tasks.review} onChange={(variable) => props.onChageReview(variable.target.value)}></textarea>
            </div>
            <Button className={classes.Button} func={() => props.onCreate(props.tasks.taskid)}>Додати таск</Button>
            <Button className={classes.Button} func={() => props.onCancel(props.tasks.taskid)}>Відміна</Button>
        </div>
    )

}
function mapStateToProps(state) {
    return {
        tasks: state.ModalContent,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        onChageTask: (variable) => dispatch({ type: 'ONCHANGETASK', target: variable }),
        onChageReview: (variable) => dispatch({ type: 'ONCHANGEREVIEW', target: variable }),
        onCreate: () => dispatch({ type: 'CREATE' }),
        onCancel: () => dispatch({ type: 'CANCEL' }),

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Createtask)
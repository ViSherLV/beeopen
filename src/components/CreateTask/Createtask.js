import React from 'react';
import classes from './Createtask.module.css';
import Button from '../../elements/button/button'
import { connect } from 'react-redux';
import { chageTask, changeReview, createTask, cancelCreation } from '../../redux/actions/actions'

function Createtask(props) {
    return (
        <div className={classes.Modal}>
            <div className={classes.top}>
                <p>Вкажіть час та назву</p>
                <textarea value={props.tasks.task} onChange={(e) => props.onChageTask(e.target.value)}></textarea>
            </div>
            <div>
                <p>Вкажіть опис</p>
                <textarea value={props.tasks.review} onChange={(e) => props.onChageReview(e.target.value)}></textarea>
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
        onChageTask: (e) => dispatch(chageTask(e)),
        onChageReview: (e) => dispatch(changeReview(e)),
        onCreate: () => dispatch(createTask()),
        onCancel: () => dispatch(cancelCreation()),

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Createtask)
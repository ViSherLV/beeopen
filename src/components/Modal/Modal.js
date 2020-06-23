import React from 'react';
import classes from './Modal.module.css';
import Button from '../../elements/button/button'
import { connect } from 'react-redux';

function Modal(props) {
    return (

        <div className={classes.Modal}>
            <div className={classes.background}></div>
            <div className={classes.top}>
                <p>Відредагувати назву таску</p>
                <textarea value={props.tasks.task} onChange={(variable) => props.onChageTask(variable.target.value)}></textarea>
            </div>
            <div>
                <p>Відредагувати опис таску</p>
                <textarea value={props.tasks.review} onChange={(variable) => props.onChageReview(variable.target.value)}></textarea>
            </div>
            <Button className={classes.Button} func={(variable) => props.onSave(props.tasks.taskid)}>Зберегти зміни</Button>
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
        onSave: (variable) => dispatch({ type: 'ONSAVE', id: variable }),

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
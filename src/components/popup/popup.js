import React from 'react';
import classes from './popup.module.css';
import Task from '../Task/Task';
import Button from '../../elements/button/button'
import { connect } from 'react-redux';

function Popup(props) {
    console.log(`popupState ${JSON.stringify(props)}`)
    return (

        <div className={classes.Popup}>
            <div className={classes.background}></div>
            <div className={classes.top}>
                <p>Відредагувати назву таску</p>
                <textarea value={props.tasks.task} onChange={(a) => props.onChageTask(a.target.value)}></textarea>
            </div>
            <div>
                <p>Відредагувати опис таску</p>
                <textarea value={props.tasks.review} onChange={(a) => props.onChageReview(a.target.value)}></textarea>
            </div>
            <Button className={classes.Button} func={(a) => props.onSave(props.tasks.taskid)}>Зберегти зміни</Button>
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

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Popup)
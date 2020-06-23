import { act } from "react-dom/test-utils"

const initialState = {
    tasks: [
        {
            task: "16:00 BeeOpen status call",
            review: "В процесі status call команда BeeOpen обговорює усі аспекти роботи над проектом з Майком",
            status: false,
        }, {
            task: "11:00 BeeOpen Grooming call",
            review: "В процесі Grooming call команда BeeOpen обговорює усі аспекти роботи над проектом між собою",
            status: false
        }],
    popupContent: {
        task: "",
        review: "",
        taskid: null,
        isOpenCreate: false,
        isOpenEdit: false

    }
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {

        case 'DONE':
            console.log(action)
            return {
                ...state,
                tasks: state.tasks.map(
                    (element, i) => i === action.id ? {
                        ...element, status: true
                    } : element)
            }
            break;
        case 'ONCHANGETASK':
            console.log(action)
            return {
                ...state, popupContent: {
                    task: action.target,
                    review: state.popupContent.review,
                    isOpenEdit: state.popupContent.isOpenEdit,
                    isOpenCreate: state.popupContent.isOpenCreate,
                    taskid: state.popupContent.taskid,


                }
            }
            break;
        case 'ONCHANGEREVIEW':
            console.log(action)
            return {
                ...state, popupContent: {
                    task: state.popupContent.task,
                    review: action.target,
                    isOpenEdit: state.popupContent.isOpenEdit,
                    isOpenCreate: state.popupContent.isOpenCreate,
                    taskid: state.popupContent.taskid,

                }
            }
            break;
        case "ONSAVE":
            console.log(`sss ${JSON.stringify(action)}`)
            let saveState;
            if (!state.popupContent.task) {
                return {
                    ...state, popupContent: {
                        isOpenEdit: false
                    }
                }

            } else {


                return {
                    ...state,
                    tasks: state.tasks.map(
                        (element, i) => i === action.id ? {
                            ...element, task: state.popupContent.task, review: state.popupContent.review
                        } : element),
                    popupContent: {
                        isOpenEdit: false
                    }
                }
            }
            break;
        case "CREATE":
            console.log(`sss ${JSON.stringify(action)}`)
            const newTasks = state.tasks.slice();
            const a = {

                task: state.popupContent.task,
                review: state.popupContent.review,
                status: false

            }
            newTasks.push(a)
            let newState
            console.log(`a is ${newTasks}`)

            if (!state.popupContent.task) {
                console.log('err')
                newState = {
                    ...state, popupContent: {
                        isOpenCreate: false
                    }
                }
                return newState
            } else {
                console.log('true')
                newState = {
                    ...state, tasks: newTasks, popupContent: {
                        isOpenCreate: false
                    }
                }
                return newState
            }

            break;
        case "OPENPOPUP":
            console.log(`action ${action}`)
            return {
                ...state,
                popupContent: {
                    task: state.tasks[action.task].task,
                    review: state.tasks[action.task].review,
                    taskid: action.task,
                    isOpenEdit: true
                }
            }
        case "OPENCREATEPOPUP":
            console.log(`action ${action}`)
            return {
                ...state,
                popupContent: {
                    isOpenCreate: true
                }
            }

        default:
            return state
    }
    return state
}
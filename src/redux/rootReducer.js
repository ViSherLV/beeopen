import { DONE, UNDONE, ONCHANGETASK, ONCHANGEREVIEW, ONSAVE, CREATE, CANCEL, OPENMODAL, OPENCREATEMODAL } from './actions/actionTypes'
import { act } from 'react-dom/test-utils';
const initialState = {
    tasks: [
        {
            task: "16:00 BeeOpen status call",
            review: "В процесі status call команда BeeOpen обговорює усі аспекти роботи над проектом з Michael",
            status: false,
        }, {
            task: "11:00 BeeOpen Grooming call",
            review: "В процесі Grooming call команда BeeOpen обговорює усі аспекти роботи над проектом між собою",
            status: false
        }],
    ModalContent: {
        task: "",
        review: "",
        taskid: null,
        isOpenCreate: false,
        isOpenEdit: false

    },
    dispatchStatus: true,
    isLoading: true
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case "START":
            console.log("Laaa")
            return state
        case "FETCH_POST":
            console.log(`FETCH_POST ${action.payload}`);
            return {
                ...state, tasks: action.payload, dispatchStatus: false,
            }
        case 'HIDE_LOADER':
            console.log('HIDE')
            return {
                ...state, isLoading: false
            }
        case 'SHOW_LOADER':
            console.log("ss")
            return {
                ...state, isLoading: true
            }
        case DONE:
            return {
                ...state,
                tasks: state.tasks.map(
                    (element, i) => i === action.id ? {
                        ...element, status: true
                    } : element)
            }
        case UNDONE:
            return {
                ...state,
                tasks: state.tasks.map(
                    (element, i) => i === action.id ? {
                        ...element, status: false
                    } : element)
            }
        case ONCHANGETASK:
            return {
                ...state, ModalContent: {
                    task: action.target,
                    review: state.ModalContent.review,
                    isOpenEdit: state.ModalContent.isOpenEdit,
                    isOpenCreate: state.ModalContent.isOpenCreate,
                    taskid: state.ModalContent.taskid,


                }
            }
        case ONCHANGEREVIEW:
            return {
                ...state, ModalContent: {
                    task: state.ModalContent.task,
                    review: action.target,
                    isOpenEdit: state.ModalContent.isOpenEdit,
                    isOpenCreate: state.ModalContent.isOpenCreate,
                    taskid: state.ModalContent.taskid,

                }
            }
        case ONSAVE:
            if (!state.ModalContent.task) {
                return {
                    ...state, ModalContent: {
                        isOpenEdit: false
                    }
                }

            } else {
                return {
                    ...state,
                    tasks: state.tasks.map(
                        (element, i) => i === action.id ? {
                            ...element, task: state.ModalContent.task, review: state.ModalContent.review
                        } : element),
                    ModalContent: {
                        isOpenEdit: false
                    }
                }
            }
        case CREATE:
            const copyOfTasks = state.tasks.slice();
            const newTask = {

                task: state.ModalContent.task,
                review: state.ModalContent.review,
                status: false

            }
            copyOfTasks.push(newTask)
            let newState

            if (!state.ModalContent.task) {
                newState = {
                    ...state, ModalContent: {
                        isOpenCreate: false
                    }
                }
                return newState
            } else {
                newState = {
                    ...state, tasks: copyOfTasks, ModalContent: {
                        isOpenCreate: false
                    }
                }
                return newState
            }
        case CANCEL:
            return {
                ...state,
                ModalContent: {
                    isOpenCreate: false
                }
            }
        case OPENMODAL:
            return {
                ...state,
                ModalContent: {
                    task: state.tasks[action.task].task,
                    review: state.tasks[action.task].review,
                    taskid: action.task,
                    isOpenEdit: true
                }
            }
        case OPENCREATEMODAL:
            return {
                ...state,
                ModalContent: {
                    isOpenCreate: true
                }
            }

        default:
            return state
    }

}
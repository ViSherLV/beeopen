import { ONCHANGETASK, ONCHANGEREVIEW, CREATE, CANCEL, ONSAVE, DONE, OPENCREATEMODAL, OPENMODAL, UNDONE } from './actionTypes'
export function chageTask(e) {
    return {
        type: ONCHANGETASK,
        target: e
    }
}
export function changeReview(e) {
    return {
        type: ONCHANGEREVIEW,
        target: e
    }

}

export function createTask() {
    return {
        type: CREATE
    }
}
export function cancelCreation() {
    return {
        type: CANCEL
    }
}

export function saveTask(id) {
    return {
        type: ONSAVE,
        id: id
    }
}
export function doneTask(id) {
    return {
        type: DONE,
        status: "done",
        id
    }
}
export function undoneTask(id) {
    return {
        type: UNDONE,
        status: "undone",
        id
    }
}

export function openCreateModal() {
    return {
        type: OPENCREATEMODAL
    }
}
export function openChangeModal(task) {
    return {
        type: OPENMODAL,
        task
    }
}
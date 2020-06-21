const initialState = {
    tasks: [
        {
            task: "16:00 BeeOpen status call",
            review: "В процесі status call команда BeeOpen обговорює усі аспекти роботи над проектом з Майком",
            status: false,
            func: function test(a) {
                console.log("ss")
            }
        }, {
            task: "11:00 BeeOpen Grooming call",
            review: "В процесі Grooming call команда BeeOpen обговорює усі аспекти роботи над проектом між собою",
            status: false
        }]
}
const znitialState = {
    tasks: [
        {
            task: "26:00 BeeOpen status call",
            review: "В процесі status call команда BeeOpen обговорює усі аспекти роботи над проектом з Майком",
            status: false,
            func: function test(a) {
                console.log("ss")
            }
        }, {
            task: "11:00 BeeOpen Grooming call",
            review: "В процесі Grooming call команда BeeOpen обговорює усі аспекти роботи над проектом між собою",
            status: false
        }]
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
        default:
            return state
    }
    return state
}
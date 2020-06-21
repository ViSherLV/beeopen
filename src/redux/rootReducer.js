const initialState = {
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
export default function rootReducer(state = initialState, action) {
    return state
}
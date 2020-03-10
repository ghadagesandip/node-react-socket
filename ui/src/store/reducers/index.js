const intialState = {
    messages: []
}

function rootReducer(state = intialState, action) {

    switch(action.type) {
        case 'MESSAGES_FETCH_SUCCEEDED':
            return Object.assign({}, state, {
                messages: action.payload
            })
        default :
            return state;
    }
}
export default rootReducer;
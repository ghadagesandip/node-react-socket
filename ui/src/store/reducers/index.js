const intialState = {
    messages: []
}

function rootReducer(state = intialState, action) {

    if(action.type === 'MESSAGES_FETCH_SUCCEEDED') {
        return Object.assign({}, state, {
            messages: action.payload
        })
    }
    return state;
}

export default rootReducer;
import * as ActionTypes from './Enum/ActionTypes'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ActionTypes.INCREMENT:
                return {
                    counter: state.counter + 1
                }
        case ActionTypes.DECREMENT:
            return {
                counter: state.counter - 1
            }
        case ActionTypes.ADD:
            return {
                counter: state.counter + action.value
            }
        case ActionTypes.SUBTRACT:
            return {
                counter: state.counter - action.value
            }
        default: 
            return {
                counter: state.counter
            }
    }

    return state;
};

export default reducer;
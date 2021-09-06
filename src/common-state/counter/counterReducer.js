import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_RESET,
} from '../../constants/actionType'

const initialState = {
    counter: 0,
};

export default function counterReducer(state, action) {
    state = state || initialState

    switch(action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                counter: state.counter + action.number
            }
        case COUNTER_DECREMENT:
            return {
                ...state,
                counter: state.counter - action.number
            }
        case COUNTER_RESET:
            return {
                counter: initialState.counter
            }
        default:
            return state
    }
}
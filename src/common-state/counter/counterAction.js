import {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
    COUNTER_RESET,
} from '../../constants/actionType';

export function increment(number) {
    return function (dispatch) {
        dispatch({
            type: COUNTER_INCREMENT,
            number: number
        })
    }
}

export function decrement(number) {
    return function (dispatch) {
        dispatch({
            type: COUNTER_DECREMENT,
            number: number
        })
    }
}

export function reset() {
    return function (dispatch) {
        dispatch({
            type: COUNTER_RESET
        })
    }
}
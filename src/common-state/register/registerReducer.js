import {
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    CLEAR_LOGIN_REGISTER_ERROR,
} from '../../constants/actionType';

const initialState = {
    errorMessage: null,
    isLoading: false,
};

export default function registerReducer(state, action) {
    state = state || initialState;

    switch (action.type) {
        case REGISTER_LOADING:
            return {
                ...state,
                isLoading: action.status,
            };

        case REGISTER_SUCCESS:
            return { ...initialState };
    
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.error,
            }

        case CLEAR_LOGIN_REGISTER_ERROR:
            return {
                ...state,
                errorMessage: initialState.errorMessage,
            }
        
        default:
            return state;
    }
}
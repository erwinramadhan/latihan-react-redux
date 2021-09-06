import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import counterReducer from "./common-state/counter/counterReducer";
import registerReducer from './common-state/register/registerReducer'

const appReducer = (history) => 
    combineReducers({
        router: connectRouter(history),
        register: registerReducer,
        counter: counterReducer,
    })

const rootReducer = (state, action) => {
    if(action === 'LOGOUT_SUCCESS') {
        state = undefined;
    }
    return appReducer(state, action);
}

export default rootReducer;
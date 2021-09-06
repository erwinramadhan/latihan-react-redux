import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from "connected-react-router";

import history from './utils/history';
import createRootReducer from './rootReducer';

const middleware = routerMiddleware(history);

const middlewares = [thunkMiddleware, middleware];

const enhancers = [applyMiddleware(...middlewares)]

const composeEhancers = 
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
        ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
        : compose;

const store = createStore(createRootReducer(history), composeEhancers(...enhancers))

export default store;
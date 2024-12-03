import { combineReducers } from 'redux';
import someReducer from './someReducer';
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
    some: someReducer,
    counter: counterReducer
});

export default rootReducer;
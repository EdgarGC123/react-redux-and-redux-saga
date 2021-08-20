import {createStore, combineReducers} from 'redux';

import entriesReducer from '../reducers/entries.reducers';

export default configureStore = () =>{
    return createStore(
        combineReducers({
            entries: entriesReducer,
        })
    );
};
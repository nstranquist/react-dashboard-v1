//How to combine two reducers into 1 single reducer? let's see...

import authReducer from './authReducer';
import eventReducer from './eventReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;

//authReducer updates information on auth property
//eventReducer updates information on the event property
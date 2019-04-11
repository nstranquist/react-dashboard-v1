/*import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/rootReducer';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';

const initialState = {};

export default () => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    )
}*/
export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase(); /*gives the firebase instance so we can sign users in */
        firebase.auth().signInWithEmailAndPassword(  /* method comes with firebase object */
            credentials.email,
            credentials.password
        ).then(() => {  /* because it is async, it returns a promise. so we use .then() and .catch() */
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }
}
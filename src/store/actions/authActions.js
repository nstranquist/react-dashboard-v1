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

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        
        firebase.auth().signOut().then(() => { /* signOut() is a built in method to firebase */
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {  /* response contains info about user */
            console.log('response: ' + response);
            return firestore.collection('users').doc(response.user.uid).set({  /* if doesn't exist, firestore will create for us. also, we don't want auto id, we want same id */
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'SINGUP_ERROR', err })
        })
    }
}
export const createEvent = (event) => {    //createEvent is the action creator
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        //dispatch action again (just paused it)
        /*const firebase = getFirebase();*/
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('events').add({
            ...event,
            firstName: profile.firstName,
            lastName: profile.lastName,
            authorId: authorId,
            dateCreated: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_EVENT', event: event });
        }).catch((err) => {
            dispatch({ type: 'CREATE_EVENT_ERROR', err });
        })
        
    }
};
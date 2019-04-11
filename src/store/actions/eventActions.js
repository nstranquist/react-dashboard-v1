export const createEvent = (event) => {    //createEvent is the action creator
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        //dispatch action again (just paused it)
        const firestore = getFirestore();
        firestore.collection('events').add({
            ...event,
            hostname: 'testname',
            hostposition: 'admin',
            hostid: 12345,
            dateCreated: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_EVENT', event: event });
        }).catch((err) => {
            dispatch({ type: 'CREATE_EVENT_ERROR', err });
        })
        
    }
};
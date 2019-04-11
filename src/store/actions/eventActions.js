export const createEvent = (event) => {
    return (dispatch, getState) => {
        //make async call to database
        //dispatch action again (just paused it)
        dispatch({ type: 'CREATE_EVENT', event: event });
        
    }
};
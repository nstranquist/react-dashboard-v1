const initState = {
    authError: null
}

const authReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('error');
            return {
                ...state,  /*takes whatever is above and spreads, so not to override */
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup-success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR': {
            console.log('SIGNUP_ERROR');
            return {
                ...state,
                authError: 'sample' /*action.err.message  /* will say what went wrong */
            }
        }
        default:
            return state;
    }
}

export default authReducer;
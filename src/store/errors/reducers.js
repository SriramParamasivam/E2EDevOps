import {HANDLE_ERROR, CLEAR_ERRORS} from './actions';

const initialState = {errors:[]};

function errorsReducer(state=initialState, action) {
    switch(action.type) {
        case CLEAR_ERRORS:
            return {...state, errors: []};
        case HANDLE_ERROR:
            const { reason, message } = action;
            if (message) {
                console.error(message, reason);
            } else {
                console.error(reason);
            }
            return {...state, errors: state.errors.concat([reason])};
        default:
            return state;
    }
}

export default errorsReducer;
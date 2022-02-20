import { actionTypes } from '../actions/index';

export const successReducer = (state = false, action) => {
    switch (action.type) {
        case actionTypes.CORRECT_GUESS:
            return true;
        default:
            return state;
    }
}
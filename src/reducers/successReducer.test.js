import { successReducer } from './sucessReducer';
import { actionTypes } from '../actions/index';

describe('successReducer', () => {
    it('returns `false` as a default state', () => {
        const returnState = successReducer(undefined, {});
        expect(returnState).toBe(false);
    });
    it(`returns "true" for ${actionTypes.CORRECT_GUESS}`, () => {
        const returnState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
        expect(returnState).toBe(true);
    })
})
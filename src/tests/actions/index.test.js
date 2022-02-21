import { correctGuess } from '../../actions/index';
import { actionTypes } from '../../actions/index';

describe('correctGuess action creator', () => {
    it('returns action with type: CORRECT_GUESS', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
    })
})
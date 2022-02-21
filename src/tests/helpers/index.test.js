import { getLetterMatchCount } from '../../helpers';

describe('getLetterMatchCount', () => {
    const secretWord = 'pluck';
    it('returns 0 if no letters match', () => {
        const returnCount = getLetterMatchCount('train', secretWord);
        expect(returnCount).toBe(0);
    });
    it('returns 3 if three letters match', () => {
        const returnCount = getLetterMatchCount('plush', secretWord);
        expect(returnCount).toBe(3);
    });
    it('returns correct count when there are duplicates', () => {
        const returnCount = getLetterMatchCount('plplp', secretWord);
        expect(returnCount).toBe(2);
    });
})
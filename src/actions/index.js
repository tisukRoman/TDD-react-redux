export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
}

export const correctGuess = () => ({
    type: actionTypes.CORRECT_GUESS
})

export const guessWord = (word) => (dispatch, getState) => {}
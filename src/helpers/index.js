export const getLetterMatchCount = (guessedWord, secretWord) => {
    const secretWordLetters = new Set(secretWord.split(''));
    const guessedWordLetters = new Set(guessedWord.split(''));
    return [...secretWordLetters].filter(l => guessedWordLetters.has(l)).length;
}
import PropTypes from 'prop-types';
import s from './GuessedWords.module.css';

const GuessedWords = ({ guessedWords }) => {
  const instruction = () => {
    return (
      <h3 data-test='instruction'>
        You should guess the word with five letters
      </h3>
    );
  };

  const guessedWordsTable = () => {
    return (
      <div data-test='guessed-words-table'>
        <h3 data-test='title'>Guessed words</h3>
        <table className={s.table}>
          <thead>
            <tr className={s.row}>
              <th>Guessed Words</th>
              <th>Letters match count</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((w) => (
              <tr className={s.row} key={w.guessedWord} data-test='guessed-words-row'>
                <th>{w.guessedWord}</th>
                <th>{w.letterMatchCount}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div data-test='guessed-words-component' className={s.wrapper}>
      {!guessedWords.length ? instruction() : guessedWordsTable()}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;

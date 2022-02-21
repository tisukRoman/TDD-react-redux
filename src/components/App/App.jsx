import GuessedWords from '../GuessedWords/GuessedWords';
import Congrats from '../Congrats/Congrats';
import './App.css';
import Input from '../Input/Input'

function App() {
  return (
    <div className='App' data-test='app-component'>
      <h1>Jotto</h1>
      <Congrats success={false} />
      <Input />
      <GuessedWords
        guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 },
          { guessedWord: 'hello', letterMatchCount: 2 },
        ]}
      />
    </div>
  );
}

export default App;

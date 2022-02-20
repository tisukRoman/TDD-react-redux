import GuessedWords from '../GuessedWords/GuessedWords';
import Congrats from '../Congrats/Congrats';
import './App.css';

function App() {
  return (
    <div className="App" data-test="app-component">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]} />
    </div>
  );
}

export default App;
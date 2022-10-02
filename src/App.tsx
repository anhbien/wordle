import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import Wordle from './components/Wordle';

function App() {
  return (
    <div className="main">
      <div>
        <h1 className='text-center'>Wordle</h1>
        <Wordle numberOfRow={6}/>
      </div>
      <Keyboard/>
    </div>
  );
}

export default App;

import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import Wordle from './components/Wordle';
import {WordleProvider} from './context/WordleContext';

function App() {
  return (
    <WordleProvider>
      <div className="main">
        <div>
          <h1 className='text-center'>Wordle</h1>
          <Wordle numberOfRow={6}/>
        </div>
        <Keyboard/>
      </div>
    </WordleProvider>
  );
}

export default App;

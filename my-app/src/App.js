import './App.css';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState.js';

function App() {
  return (
    <div className="App">
      < StatefulGreetingWithPrevState greeting='I am a stateful class component' name='Mike' />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import FunctionalGreetingProps from './components/FunctionalGreetingProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingProps greeting="Nice to meet you!" name="Mike" age="32" />
    </div>
  );
}

export default App;

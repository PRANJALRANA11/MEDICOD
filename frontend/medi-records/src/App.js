import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
      </Router>
    </div>
  );
}

export default App;

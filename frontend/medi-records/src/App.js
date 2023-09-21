import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <Dashboard/>
      </Router>
    </div>
  );
}

export default App;

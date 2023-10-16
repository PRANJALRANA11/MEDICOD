import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Signup from './Components/Home_components/Signup'
import Signin from './Components/Home_components/Signin'
import Forgotpassword from './Components/Home_components/forgotpassword'
import Resetpassword from './Components/Home_components/Resetpassword'

function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Signup" element={<><Signup/></>} />
      <Route path="/Signin" element={<><Signin/></>} />
      <Route path="/forgotpassword" element={<Forgotpassword/>} />
      <Route path="/resetpassword" element={<Resetpassword/>} />
      </Routes>
    </div>
  );
}

export default App;

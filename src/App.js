import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn/';
import Welcome from './pages/Welcome/';
import Enter from './pages/Enter/';
import Registration from './pages/Registration/';
import AfterRegister from'./pages/AfterRegister/';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LogIn/>}/>
          <Route path='/enter' element={<Enter/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/registercompleted' element={<AfterRegister/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

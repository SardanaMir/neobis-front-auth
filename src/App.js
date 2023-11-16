import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import Welcome from './components/Welcome/Welcome';
import Enter from './components/Enter/Enter';
import Registration from './components/Registration/Registration';
import AfterRegister from'./components/AfterRegister/AfterRegister';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/enter' element={<Enter/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/registercompleted' element={<AfterRegister/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

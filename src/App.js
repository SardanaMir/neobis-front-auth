import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn';
import Welcome from './pages/Welcome/Welcome';
import Enter from './pages/Enter/Enter';
import Registration from './pages/Registration/Registration';
import AfterRegister from'./pages/AfterRegister/AfterRegister';

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

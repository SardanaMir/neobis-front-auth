import './Enter.css';
import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';

function Enter() {
  const exitRef = useRef();
  const [exitMsg, setExitMsg] = useState('');
  const [success, setSuccess] = useState('');

  const handleExit = (e) =>{
    e.preventDefault();
    setSuccess(true);
  }
  const handleStay = (e) =>{
    setSuccess(false);
  }
  return (
    <div className='container fl-col-ai-cen jus-cen'>
      <div className={success ? 'overlay' : 'offscreen'}  onClick={handleStay}>
        <div className='modal'>
          <h3 aria-live='asserive'>Выйти?</h3>
          <Link to={'/'} className='loginBtn mt25px confirm-btn'>Да, точно</Link>
          <button className='white-btn mt25px' onClick={handleStay}>Нет, остаться</button>
        </div>
      </div>

      <h2>С возвращением!</h2>
      <h3>Lorby - твой личный репетитор</h3>
      <img className='welcomeImg' src="./img/bg.png" alt="" />
      <button className='white-btn btnExit mb25' onClick={handleExit}>Выйти</button>
    </div>
  );
}

export default Enter;
